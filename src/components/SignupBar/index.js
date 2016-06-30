import React from 'react';
import classes from './SignupBar.scss';

export const SignupBar = () => (
  <div className={`"col-lg-12 col-md-12 col-sm-12 col-xs-12" ${classes.signupbar}`}>
    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <input placeholder="First Name"/>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <input placeholder="Last Name"/>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <input placeholder="Email Address"/>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <button>Sign Up</button>
    </div>
  </div>
)

export default SignupBar;