import React from 'react';
import SignupBar from '../SignupBar';
import classes from './Footer.scss';

export default class Footer extends React.Component {
  render() {
    let isHomepage = window.location.pathname === '/';
    let isSignup = window.location.pathname === '/signup';
    let hideSignup = isHomepage || isSignup;

    return (
      <div className={`${classes.globalFooter} globalFooter col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12`}>
        <div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h3>Connect with raines perspectives</h3>
            <p className={classes.desc}>Contact us to provide feedback or submit content proposals at <a href="mailto:perspectives@rainesinternational.com" className={classes.email}>perspectives@rainesinternational.com</a></p>
            <hr/>
          </div>
          {
            hideSignup ? "" : <SignupBar/>
          }
          <div className={`${classes.footerFooter} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook-square" aria-hidden="true"></i>
            <span>2016 Raines International Inc. | 212-997-1100 | Home | Privacy Policy | Terms of Use | Contact Us | <a href="http://rainesinternational.com/site-map.html">Site Map</a></span>
          </div>
        </div>
      </div>
    )
  }
}

Footer.contextTypes = {
  router: React.PropTypes.object.isRequired
}