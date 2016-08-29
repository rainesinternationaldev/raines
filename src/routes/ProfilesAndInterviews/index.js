import React from 'react'
import Dropdown from 'react-dropdown';
import {ViewMore} from './ViewMore';
import classes from './ProfilesAndInterviews.scss'
import {bindActionCreators} 	from 'redux';
import * as actionCreators  	from '../../actions/profiles';
import {connect} 							from 'react-redux';
import * as data from './data';
import utils from '../utils';
import moment from 'moment';
import {Link} from 'react-router';

class ProfilesAndInterviews extends React.Component {
  constructor(props) {
    super(props);
    this.displayMoreProfiles = () => {
      this.setState({ displayedProfiles: this.state.displayedProfiles += 8 });
    }

    this.selectIndustry = (industry) => {
      this.setState({
        selectedIndustry: industry
      })
    }

    this.selectTrack = (track) => {
      this.setState({
        selectedTrack: track
      })
    }

    this.resetFields = () => {
      this.setState({
        selectedIndustry: null,
        selectedTrack: null
      })
    }

    this.state = {
      industries: data.industries,
      tracks: data.trackTypes,
      selectedIndustry: null,
      selectedTrack: null,
      displayedProfiles: 8
    }
  }

  componentWillMount() {
    if (!this.props.wordpress.profiles.length) {
      this.props.actions.fetchProfiles()
      .then((profiles) => {
        this.props.actions.fetchRemainingProfileImagesAsync();
      });
    }
  }

  render() {
    let profiles = this.props.wordpress.profiles;

    let displayedProfiles = profiles.filter(filterByIndustryAndType.bind(this)).slice(0, this.state.displayedProfiles);

    let featuredProfile = profiles.filter((profile) => profile.featured.indexOf(874) > -1 );

    function filterByIndustryAndType(profile) {
      let industryId = this.state.selectedIndustry && Number(this.state.selectedIndustry.value);
      let trackId    = this.state.selectedTrack && Number(this.state.selectedTrack.value);
      if (industryId && trackId) {
        return profile['industry-types'].indexOf(industryId) > -1 && profile['track-types'].indexOf(trackId) > -1;
      } else if (industryId) {
        console.log(profile['industry-types'].indexOf(industryId))
        return profile['industry-types'].indexOf(industryId) > -1;
      } else if (trackId) {
        return profile['track-types'].indexOf(trackId) > -1;
      } else {
        return true;
      }
    }

    return (
      <div className={classes.profilesAndInterviews}>
        <div className={`${classes.inner} col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12`}>
          {
            featuredProfile.length ?
            <div className={`${classes.featuredProfile} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
              <h4 className={classes.subtitle}>Featured Profile</h4>
              <hr/>
              <div className={`${classes.featuredImageDiv} col-lg-4 col-md-4 col-sm-12 col-xs-12`}>
                <Link to={`/profile/${featuredProfile[0].id}-${utils.formatTitle(featuredProfile[0].title.rendered)}`}>
                  <img className={classes.featuredImage} src={featuredProfile[0].imageURL}/>
                </Link>
              </div>
              <div className={`${classes.featuredContent} col-lg-8 col-md-8 col-sm-12 col-xs-12`}>
                <h4 className={classes.name}>{featuredProfile[0].title.rendered}</h4>
                <h4 className={classes.company}>{data.firms[featuredProfile[0].firms[0]]}</h4>
                <h5 className={classes.position}>{utils.decodeEntities(data.titles[featuredProfile[0].titles[0]])}</h5>
                <p><span className={classes.excerpt}>{utils.decodeEntities(featuredProfile[0].content.rendered)}</span></p>
              </div>
            </div> : ""
          }
          <div className={`${classes.filterBar} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <span className={classes.filter}>FILTER</span>
            <span className={classes.dropdown}>
              <Dropdown
                options={this.state.industries}
                onChange={this.selectIndustry}
                value={this.state.selectedIndustry}
                placeholder="Industry" />
            </span>
            <span className={classes.dropdown}>
              <Dropdown
                options={this.state.tracks}
                onChange={this.selectTrack}
                value={this.state.selectedTrack}
                placeholder="Track" />
            </span>
            <span
              className={classes.reset}
              onClick={this.resetFields}>RESET</span>
          </div>
          <div className={`${classes.profiles} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            {
              displayedProfiles ?
              displayedProfiles.map((profile, i) => {
                return (
                    <div className={`${classes.profile} col-lg-3 col-md-3 col-sm-6 col-xs-12`} key={i}>
                      <Link to={`/profile/${profile.id}-${utils.formatTitle(profile.title.rendered)}`}>
                        <img src={profile.imageURL || "http://static.giantbomb.com/uploads/square_small/13/135472/1891872-134vaporeon.png" }/>
                      </Link>
                      <Link to={`/profile/${profile.id}-${utils.formatTitle(profile.title.rendered)}`}>
                        <h5 className={classes.name}>{profile.title.rendered}</h5>
                      </Link>
                      <h5 className={classes.position}>{utils.decodeEntities(data.titles[profile.titles[0]])}</h5>
                      <h5 className={classes.company}>{utils.decodeEntities(data.firms[profile.firms[0]])}</h5>
                    </div>
                )
              }) : ""
            }
          </div>
          <ViewMore viewMore={this.displayMoreProfiles}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  wordpress: state.wordpress
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilesAndInterviews);