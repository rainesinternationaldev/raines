import React from 'react';
import { IndexLink, Link } from 'react-router';
import classes from './Navbar.scss';
import CompanyLogo from './assets/raineslogo.png';
import {connect} 							from 'react-redux';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.showMenuOverlay = () => {
      this.setState({ showMenuOverlay: true });
    }
    this.hideMenuOverlay = () => {
      this.setState({ showMenuOverlay: false });
    }
    this.state = {
      showMenuOverlay: false
    }
  }

  render() {
    const { mediaType } = this.props;
    let ulResponsive = `navList-${mediaType}`;
    let liResponsive = `navLink-${mediaType}`;
    console.log('the mediatype', mediaType)
    return (
      <div className={`${classes.globalNavbar} globalNavbar`}>
        <div className="col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12">
          <a href="http://rainesinternational.com/">
            <img src={CompanyLogo} className={classes.companyLogo}/>
          </a>
          {
            mediaType === 'extraSmall' ? 
              <div className={classes.burgerDiv}>
                <i className="fa fa-bars" aria-hidden="true" onClick={this.showMenuOverlay}></i>
                {
                  this.state.showMenuOverlay ?
                  <div className={classes.menuOverlay}>
                    <button className={classes.closeOverlay} onClick={this.hideMenuOverlay}>X</button>
                    <ul>
                      <li><a href="http://rainesinternational.com/advantage.html">Advantage</a></li>
                      <li><a href="http://rainesinternational.com/industries.html">Industries</a></li>
                      <li><a href="http://rainesinternational.com/functions.html">Functions</a></li>
                      <li><a href="http://rainesinternational.com/leadership.html">Leadership</a></li>
                      <li><a href="http://rainesinternational.com/diversity---inclusion.html">Diversity & Inclusion</a></li>
                      <li><a href="https://perspectives.rainesinternational.com">Perspectives</a></li>
                      <li><a href="http://rainesinternational.com/about.html">About Us</a></li>
                      <li><a href="http://rainesinternational.com/contact.html">Contact</a></li>
                    </ul>
                  </div> : ""
                }
              </div> :
              <div className={classes.navListContainer}>
                <ul className={`${classes.navList} ${classes[ulResponsive]}`}>
                  <li className={`${classes.navLink} ${classes[liResponsive]}`}>
                    <a href="http://rainesinternational.com/advantage.html">Advantage</a>
                    <ul className={`${classes.dropdownList} ${classes.advantageDropdown}`}>
                      <li><a href="http://rainesinternational.com/relationships.html">Relationships</a></li>
                      <li><a href="http://rainesinternational.com/access.html">Access</a></li>
                      <li><a href="http://rainesinternational.com/integrity.html">Integrity</a></li>
                      <li><a href="http://rainesinternational.com/speed.html">Speed</a></li>
                    </ul>
                  </li>
                  <li className={`${classes.navLink} ${classes[liResponsive]}`}>Expertise
                    <ul className={`${classes.dropdownList} ${classes.expertiseDropdown}`}>
                      <li><a href="http://rainesinternational.com/industries.html">Industries</a></li>
                      <li><a href="http://rainesinternational.com/functions.html">Functions</a></li>
                      <li><a href="http://rainesinternational.com/leadership.html">Leadership</a></li>
                    </ul>
                  </li>
                  <li className={`${classes.navLink} ${classes[liResponsive]}`}>
                    <a href="http://rainesinternational.com/diversity---inclusion.html">Diversity & Inclusion</a>
                  </li>
                  <li className={`${classes.navLink} ${classes[liResponsive]}`}>
                    <a href="https://perspectives.rainesinternational.com">Perspectives</a>
                  </li>
                  <li className={`${classes.navLink} ${classes[liResponsive]}`}>
                    <a href="http://rainesinternational.com/about-us.html">About Us</a>
                    <ul className={`${classes.dropdownList} ${classes.aboutUsDropdown}`}>
                      <li><a href="http://rainesinternational.com/who-we-are.html">Who We Are</a></li>
                      <li><a href="http://rainesinternational.com/news.html">News</a></li>
                    </ul>
                  </li>
                  <li className={`${classes.navLink} ${classes[liResponsive]}`}>
                    <a href="http://rainesinternational.com/contact.html">Contact</a>
                    <ul className={`${classes.dropdownList} ${classes.contactDropdown}`}>
                      <li><a href="http://rainesinternational.com/offices.html">Offices</a></li>
                      <li><a href="http://rainesinternational.com/careers.html">Careers</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  mediaType: state.browser.mediaType
});

export default connect(mapStateToProps)(Navbar);