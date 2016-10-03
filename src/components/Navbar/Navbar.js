import React from 'react';
import { IndexLink, Link } from 'react-router';
import classes from './Navbar.scss';
import CompanyLogo from './assets/raineslogo.png';
import {connect} 							from 'react-redux';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { mediaType } = this.props;
    let ulResponsive = `navList-${mediaType}`;
    let liResponsive = `navLink-${mediaType}`;
    return (
      <div className={`${classes.globalNavbar} globalNavbar`}>
        <div className="col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12">
          <a href="http://rainesinternational.com/">
            <img src={CompanyLogo} className={classes.companyLogo}/>
          </a>
          <div className={classes.navListContainer}>
            <ul className={`${classes.navList} ${classes[ulResponsive]}`}>
              <li className={`${classes.navLink} ${classes[liResponsive]}`}>Advantage</li>
              <li className={`${classes.navLink} ${classes[liResponsive]}`}>Expertise</li>
              <li className={`${classes.navLink} ${classes[liResponsive]}`}>About Us</li>
              <li className={`${classes.navLink} ${classes[liResponsive]}`}>Diversity</li>
              <li className={`${classes.navLink} ${classes[liResponsive]}`}>ConsultantTrack</li>
              <li className={`${classes.navLink} ${classes[liResponsive]}`}>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  mediaType: state.browser.mediaType
});

export default connect(mapStateToProps)(Navbar);