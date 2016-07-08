import React from 'react';
import classes from './SubNavbar.scss';

export const SubNavbar = () => (
  <div className={classes.subNavbar}>
    <div className={`${classes.inner} col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12`}>
      <div className="center col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h1>raines perspectives</h1>
        <hr className={classes.middleHr}/>
        <ul className={classes.subnavList}>
          <li>Who We Are</li>
          <li>Ideas & Insights</li>
          <li>Profiles & Interviews</li>
        </ul>
        <hr/>
      </div>
    </div>
  </div>
)

export default SubNavbar;