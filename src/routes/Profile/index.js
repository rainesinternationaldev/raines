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

    const currentProfile = this.props.wordpress.currentProfile;
    const cachedProfile = currentProfile && currentProfile.id == profileId;
    if (this.props.wordpress && !this.props.wordpress.profiles.length) {
      this.props.actions.fetchProfile(profileId)
    } else if (this.props.wordpress && this.props.wordpress.profiles.length && !currentProfile) {
      this.setState({
        currentProfile: this.props.wordpress.profiles.filter((profile) => profile.id == profileId)[0]
      })
    } else if (!cachedProfile) {
      this.setState({
        currentProfile: this.props.wordpress.profiles.filter((profile) => profile.id == profileId)[0]
      })
    }
  }

  render() {
    const profile = this.state.currentProfile || this.props.wordpress.currentProfile;
    let contentStr;
    let imgSrc;
    let questions;
    let answers;
    if (profile && profile.id) {
      questions = profile[""].question;
      answers   = profile[""].answer;
    }

    return (
      <div className={classes.profile}>
        <div className={`${classes.inner} col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12`}>
          <hr/>
          
          <div className={`${classes.content} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <div className={`${classes.image} col-lg-5 col-md-5 col-sm-12 col-xs-12`}>
              {
                profile ?
                <img src={profile.imageURL}/> : ""
              }
            </div>
            <div className={`${classes.info} col-lg-7 col-md-7 col-sm-12 col-xs-12`}>
              {
                profile ?
                <div>
                  <div className={classes.name}>
                    <h1>{profile.title.rendered}</h1>
                  </div>
                  <div className={classes.position}>
                    <h5>{utils.decodeEntities(data.titles[profile.titles[0]])}</h5>
                  </div>
                  <div className={classes.company}>
                    <h5>{utils.decodeEntities(data.firms[profile.firms[0]])}</h5>
                  </div>
                  <div className={classes.excerpt}>
                    <h5>{utils.decodeEntities(profile.excerpt.rendered)}</h5>
                  </div>
                </div> : ""
              }
            </div>
            <div className={`${classes.interview} col-lg-12  col-md-6 col-sm-12 col-xs-12`}>
              {
                questions ?
                questions.map((question, i) => {
                  return (
                    <div className={classes.qa} key={i}>
                      <p className={classes.question}>{questions[i]}</p>
                      <p className={classes.answer}>{answers[i]}</p>
                    </div>
                  )
                }) : ""
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