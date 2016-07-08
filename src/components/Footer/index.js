import React from 'react';
import classes from './Footer.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <div className={`${classes.globalFooter} col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12`}>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h3>Connect with raines perspectives</h3>
          <p className={classes.desc}>Contact us to provide feedback or submit content proposals at <a href="mailto:support@rainesinternational.com">support@rainesinternational.com</a></p>
          <hr/>
          <div className={classes.footerFooter}>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-facebook-square" aria-hidden="true"></i>
            <span>2016 Raines International Inc. | 212-997-1100 | Home | Privacy Policy | Terms of Use | Contact Us</span>
          </div>
        </div>
      </div>
    )
  }
}