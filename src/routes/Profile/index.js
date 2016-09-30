import React from 'react';
import classes from './Profile.scss';
import {bindActionCreators} 	from 'redux';
import * as actionCreators  	from '../../actions/profiles';
import {connect} 							from 'react-redux';
import * as data from './data';
import utils from '../utils';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProfile: null
    }
  }

  componentWillMount() {
    const profileId = this.props.location.pathname.slice(9).split('-')[0];
    this.setState({ location: this.props.location.pathname });

    if (!this.props.wordpress.profiles.length) {
      this.props.actions.fetchProfiles()
        .then(() => {
          let currentProfile = this.props.wordpress.profiles.filter(profile => profile.ID == profileId)[0];
          this.setState({ currentProfile })
        })
    } else {
      let currentProfile = this.props.wordpress.profiles.filter(profile => profile.ID == profileId)[0];
      this.setState({ currentProfile })
    }
  }

  render() {
    const profile = this.state.currentProfile;
    if (profile) {
      setTimeout(() => {
        console.log('found profile')
        console.log($('em').parent())
        $('em').parent().slice(1).css({ 
          'margin-top': '30px'
        });
      }, 100)
    }

    return (
      <div className={classes.profile}>
        <div className={`${classes.inner} col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12`}>
          <div className={`${classes.hrDiv} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <hr/>
          </div>
          
          <div className={`${classes.content} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <div className={`${classes.image} col-lg-5 col-md-5 col-sm-12 col-xs-12`}>
              {
                profile ?
                <img src={profile.post_thumbnail.URL}/> : ""
              }
            </div>
            <div className={`${classes.info} col-lg-7 col-md-7 col-sm-12 col-xs-12`}>
              {
                profile ?
                <div>
                  <div className={classes.name}>
                    <h1>{profile.title}</h1>
                  </div>
                  <div className={classes.position}>
                    <h1>{profile.position}</h1>
                  </div>
                  <div className={classes.company}>
                    <h5>{profile.current_firm}</h5>
                  </div>
                  <div className={classes.excerpt}>
                    <div dangerouslySetInnerHTML={{__html: profile.excerpt}}></div>
                  </div>
                </div> : ""
              }
            </div>
            <div className={`${classes.interview} col-lg-12  col-md-6 col-sm-12 col-xs-12`}>
              <hr/>
              {
                profile ? <div className={classes.qa}>
                  <div dangerouslySetInnerHTML={{__html: profile.content}}></div>
                </div> : ""
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  wordpress: state.wordpress
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);