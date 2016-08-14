import React from 'react';
import classes from './Profile.scss';
import SignupBar from '../../components/SignupBar';
import {bindActionCreators} 	from 'redux';
import * as actionCreators  	from '../../actions/profiles';
import {connect} 							from 'react-redux';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null
    }
  }

  componentWillMount() {
    const profileId = this.props.location.pathname.slice(9).split('-')[0];
    this.setState({ location: this.props.location.pathname });

    const currentProfile = this.props.wordpress.currentProfile;
    const cachedProfile = currentProfile && currentProfile.id == profileId;
    if (this.props.wordpress && !this.props.wordpress.profiles.length) {
      this.props.actions.fetchProfile(profileId)
    }
  }

  render() {
    const profile = this.props.wordpress.currentProfile;
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
          <div className={`${classes.header} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <div className={classes.name}>
              {
                profile ?
                <h1>{profile.title.rendered}</h1> : ""
              }
            </div>
            <div className={classes.position}>
              Senior Vice President, Strategy
            </div>
            <div className={classes.company}>
              Ross Stores, Inc.
            </div>
            <hr/>
          </div>
          <div className={`${classes.content} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <div className={`${classes.image} col-lg-4 col-md-6 col-sm-12 col-xs-12`}>
              {
                profile ?
                <img src={profile.imageURL}/> : ""
              }
            </div>
            <div className={`${classes.interview} col-lg-8 col-md-6 col-sm-12 col-xs-12`}>
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
          <SignupBar/>
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