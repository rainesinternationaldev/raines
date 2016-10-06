import React from 'react';
import SignupBar from '../SignupBar';
import classes from './Footer.scss';
import {connect} from 'react-redux';

class Footer extends React.Component {

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  render() {
    const {mediaType} = this.props;
    console.log('THE FOOTER PROPS', this.props)
    let isHomepage = this.props.location === '/';
    let isSignup = this.props.location === '/signup';
    let hideSignup = isHomepage || isSignup;

    return (
      <div className={`${classes.globalFooter} globalFooter col-lg-10 col-md-12 col-sm-12 col-xs-12`}>
        {(() => {
          switch (mediaType) {
            case "extraSmall":
              return (
                <div className={classes.mobileFooter}>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h3>Connect with raines perspectives</h3>
                    <p className={classes.desc}>Contact us to provide feedback or submit content proposals at <a href="mailto:perspectives@rainesinternational.com" className={classes.email}>perspectives@rainesinternational.com</a></p>
                  </div>
                  {
                    hideSignup ? "" : <SignupBar/>
                  }
                  <div className={`${classes.footerFooter} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
                    <hr className={classes.lowerHr}/>
                    <div><p>2016 Raines International Inc. All Rights Reserved.</p></div>
                    <div><p>212-997-1100 | Home | Privacy Policy | Terms of Use | Contact Us | <a href="http://rainesinternational.com/site-map.html">Site Map</a></p></div>

                    <hr/>

                    <div className={classes.socialMedia}>
                      <a href="https://twitter.com/consultanttrack" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                      <a href="https://www.facebook.com/RainesInternational" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                      <a href="https://www.linkedin.com/company/raines-international-inc" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                    </div>
                  </div>
                </div>
              )
            case "large":
            default:
              return (
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
                    {
                      hideSignup ? "" : <hr className={classes.lowerHr}/>
                    }
                    <a href="https://twitter.com/consultanttrack" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href="https://www.facebook.com/RainesInternational" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                    <a href="https://www.linkedin.com/company/raines-international-inc" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                    <span>2016 Raines International Inc. | 212-997-1100 | <a href="http://rainesinternational.com/index.html">Home</a> | Privacy Policy | Terms of Use | <a href="The Privacy Policy link in the footer of the main website (rainesinternational.com) does not lead anywhere">Contact Us</a> | <a href="http://rainesinternational.com/site-map.html">Site Map</a></span>
                  </div>
                </div>
              )
          }
        })()}
      </div>
    )
  }
}

Footer.contextTypes = {
  router: React.PropTypes.object.isRequired,

}

const mapStateToProps = (state) => ({
  mediaType: state.browser.mediaType,
  location: state.router.locationBeforeTransitions.pathname
});

export default connect(mapStateToProps)(Footer);