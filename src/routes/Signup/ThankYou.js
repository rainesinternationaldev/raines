import React from 'react';
import classes from './ThankYou.scss';

export const ThankYou = () => (
  <div className={`${classes.thankYou} col-lg-10 col-md-12 col-sm-12 col-xs-12`}>
    <div className={`${classes.inner} col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12`}>
      <h1>Thank You.</h1>
      <p>Thank you for introducing yourself to us via Raines International Perspectives’ Registration website. </p>
      <p>Your responses to our questions/uploaded CV have been received and incorporated into our candidate database. The data you provided us will be held completely confidential, per our <a href="http://www.rainesinternational.com/privacy-policy">Privacy Policy</a>. Every single CV that is submitted will be examined carefully. Our search consultants will contact you if we require further information or should suitable opportunities arise. </p>
      <p>If at any point you wish to remove your information from our database, please alert us using the <a href="http://rainesinternational.com/contact.html">contact form</a> on our website.</p>
      <p>Thank you for entrusting your information to us. We are happy to know a little about you!</p>

      <div className={classes.signature}>
        <p>Sincerely,</p>
        <p className={classes.team}>The Raines Perspectives Team</p>
      </div>
    </div>
  </div>
);