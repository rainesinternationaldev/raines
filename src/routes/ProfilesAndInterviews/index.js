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
import profilesImage from './assets/profilesImage.jpg'

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
    }
  }

  componentDidMount() {
    if (this.props.mediaType === 'extraSmall' || this.props.mediaType === 'small')
    $('.Dropdown-root').css({ padding: '10px' })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.mediaType !== this.props.mediaType) {
      if (nextProps.mediaType === 'extraSmall' || nextProps.mediaType === 'small') {
        $('.Dropdown-root').css({ padding: '10px' })
      }
    }
  }

  render() {
    const {
      mediaType
    } = this.props;
    let profiles = this.props.wordpress.profiles;

    let featuredProfile;
    if (profiles.length) {
      profiles.forEach(profile => {
        if (profile.categories['Profiles Page - Profiles']) {
          featuredProfile = profile;
        }
      })
    }

    let displayedProfiles = profiles.filter(filterByIndustryAndType.bind(this)).slice(0, this.state.displayedProfiles);
    console.log('the displayed profiles', displayedProfiles)
    console.log(this.state.selectedIndustry, this.state.selectedTrack)

    function filterByIndustryAndType(profile) {
      let industry = this.state.selectedIndustry && this.state.selectedIndustry.value;
      let track    = this.state.selectedTrack && this.state.selectedTrack.value;
      let belongsToIndustry = profile.categories[industry];
      let belongsToTrack    = profile.categories[track];
      if (industry && track) {
        return belongsToIndustry && belongsToTrack
      } else if (industry) {
        return belongsToIndustry
      } else if (track) {
        return belongsToTrack
      } else {
        return true;
      }
    }    

    let profileResponsive = `profile${mediaType}`;

    const header = {
      title: 'Raines Perspective Interviews',
      meta: [{
        name: 'description',
        content: 'Read Raines Perspectives interviews with executives and business leaders from top companies around the world.'
      }, {
        property: 'og:title',
        content: 'Raines Perspective Interviews'
      }, {
        property: 'og:description',
        content: 'Read Raines Perspectives interviews with executives and business leaders from top companies around the world.'
      }, {
        property: 'og:image',
        content: `https://perspectives.rainesinternational.com${profilesImage}`
      }, {
        property: 'og:url',
        content: 'https://perspectives.rainesinternational.com/profiles-and-interviews'
      }]
    }

    return (
      <div className={classes.profilesAndInterviews}>
        <Helmet {...header} />
        <div className={`${classes.inner} col-lg-10 col-md-12 col-sm-12 col-xs-12`}>
          {
            featuredProfile ?
            <div className={`${classes.featuredProfile} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
              <h4 className={classes.subtitle}>Featured Profile</h4>
              <hr/>
              <div className={`${classes.featuredImageDiv} col-lg-4 col-md-4 col-sm-4 col-xs-12`}>
                <Link to={`/profile/${featuredProfile.ID}-${utils.formatTitle(featuredProfile.title)}`}>
                  <img className={classes.featuredImage} src={featuredProfile.post_thumbnail.URL}/>
                </Link>
              </div>
              <div className={`${classes.featuredContent} ${classes[mediaType]} col-lg-8 col-md-8 col-sm-8 col-xs-12`}>
                <h4 className={classes.name}>{featuredProfile.title}</h4>
                <h4 className={classes.company}>{featuredProfile.current_firm}</h4>
                <h5 className={classes.position}>{featuredProfile.position}</h5>
                <p><span className={classes.excerpt}>{utils.decodeEntities(featuredProfile.excerpt)}</span></p>
              </div>
            </div> : ""
          }
          <div className={`${classes.filterBar} ${classes[mediaType]} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
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
                placeholder="Function" />
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
                    <div className={`${classes.profile} ${classes[profileResponsive]} col-lg-3 col-md-3 col-sm-3 col-xs-12`} key={i}>
                      <Link to={`/profile/${profile.ID}-${utils.formatTitle(profile.title)}`}>
                        <img src={profile.post_thumbnail.URL}/>
                      </Link>
                      <div className={classes.footer}>
                        <Link to={`/profile/${profile.ID}-${utils.formatTitle(profile.title)}`}>
                          <h5 className={classes.name}>{profile.title}</h5>
                        </Link>
                        <h5 className={classes.position}>{profile.position}</h5>
                        <h5 className={classes.company}>{profile.current_firm}</h5>
                      </div>
                    </div>
                )
              }) : ""
            }
          </div>
          <ViewMore viewMore={this.displayMoreProfiles}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  wordpress: state.wordpress,
  mediaType: state.browser.mediaType
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilesAndInterviews);