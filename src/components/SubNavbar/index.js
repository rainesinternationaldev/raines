import React from 'react';
import {Link} from 'react-router';
import classes from './SubNavbar.scss';

export const SubNavbar = () => (
  <div className={classes.subNavbar}>
    <div className={`${classes.inner} col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12`}>
      <div className="center col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h1><Link to="/">raines perspectives</Link></h1>
        <hr className={classes.middleHr}/>
        <ul className={classes.subnavList}>
          <li><Link to="/who-we-are">Who We Are</Link></li>
          <li><Link to="/ideas-and-insights">Ideas & Insights</Link></li>
          <li>Profiles & Interviews</li>
        </ul>
      </div>
    </div>
  </div>
)

export default SubNavbar;