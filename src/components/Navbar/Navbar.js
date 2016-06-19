import React from 'react';
import { IndexLink, Link } from 'react-router';
import classes from './Navbar.scss';
import CompanyLogo from './assets/raineslogo.png';

export const Navbar = () => (
  <div className={classes.globalNavbar}>
    <IndexLink to='/' activeClassName={classes.activeRoute}>
      <img src={CompanyLogo} className={classes.companyLogo}/>
    </IndexLink>
    <div className={classes.navListContainer}>
      <ul className={classes.navList}>
        <li className={classes.navLink}>Advantage</li>
        <li className={classes.navLink}>Industries</li>
        <li className={classes.navLink}>Functions</li>
        <li className={classes.navLink}>Leadership</li>
        <li className={classes.navLink}>About Us</li>
        <li className={classes.navLink}>ConsultantTrack</li>
        <li className={classes.navLink}>Contact</li>
      </ul>
    </div>

    <Link to='/counter' activeClassName={classes.activeRoute}>
      Counter
    </Link>

  </div>
)

export default Navbar
