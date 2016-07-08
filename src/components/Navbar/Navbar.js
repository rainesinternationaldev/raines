import React from 'react';
import { IndexLink, Link } from 'react-router';
import classes from './Navbar.scss';
import CompanyLogo from './assets/raineslogo.png';

export const Navbar = () => (
  <div className={classes.globalNavbar}>
    <div className="col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12">
      <a href="http://rainesinternational.com/">
        <img src={CompanyLogo} className={classes.companyLogo}/>
      </a>
      <div className={classes.navListContainer}>
        <ul className={classes.navList}>
          <li className={classes.navLink}>Advantage</li>
          <li className={classes.navLink}>Expertise</li>
          <li className={classes.navLink}>About Us</li>
          <li className={classes.navLink}>Diversity</li>
          <li className={classes.navLink}>ConsultantTrack</li>
          <li className={classes.navLink}>Contact</li>
        </ul>
      </div>
    </div>
  </div>
)

export default Navbar
