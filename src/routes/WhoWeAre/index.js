import React from 'react';
import introImg from './assets/intro.png';
import thoughtLeadershipImg from './assets/thoughtleadership.png';
import accessToTalentImg from './assets/accesstotalent.png';
import careerInsightsImg from './assets/careerinsights.png';
import classes from './WhoWeAre.scss';
import {Link} from 'react-router';
import {connect} 							from 'react-redux';

class WhoWeAre extends React.Component{
  constructor(props) {
    super(props);

    this.updateHeight = () => {
      var rightDiv = $('.right');
      var width = rightDiv.width();
      rightDiv.css('height', width * 0.642);

      var rightDiv = $('.left');
      var width = rightDiv.width();
      rightDiv.css('height', width * 0.642);
    }
  }

  componentWillMount() {
    this.updateHeight();
  }

  render() {
    const { mediaType } = this.props;
    return (
      <div className={`${classes.whoWeAre} col-lg-10 col-md-12 col-sm-12 col-xs-12`}>
        {(() => {
          switch(mediaType) {
            case "extraSmall":
              return(
                <div className={`${classes.inner}`}>
                  <img
                    className={classes.splashImage}
                    src={introImg}/>
                  <div className={`${classes.row} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
                    <div className={`${classes.column} ${classes.textColumn} col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
                      <h1>Thought Leaders</h1>
                      <p>With more than 45 years of experience working with top talent, Raines International shares our industry and functional expertise to keep you prepared for the issues businesses face today.</p>
                      <p className={classes.link}><Link to="/ideas-and-insights">View Ideas & Insights <span className={`glyphicon glyphicon-menu-right ${classes.icon}`} aria-hidden="true"></span></Link></p>
                    </div>
                    <div className={`${classes.column} col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
                      <img src={thoughtLeadershipImg}/>
                    </div>
                  </div>
                  <div className={`${classes.hrDiv} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>

                  </div>
                  <div className={`${classes.row} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
                    <div className={`${classes.column} ${classes.textColumn} col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
                      <h1>Access to Talent</h1>
                      <p>Meet successful executive leaders through our profiles and recent Raines International placements to stay on top of the latest in leadership and career strategies.</p>
                      <p className={classes.link}><Link to="/profiles-and-interviews">View Profiles <span className={`glyphicon glyphicon-menu-right ${classes.icon}`} aria-hidden="true"></span></Link></p>
                      <p className={classes.link}><Link to="/placements">View Placements <span className={`glyphicon glyphicon-menu-right ${classes.icon}`} aria-hidden="true"></span></Link></p>
                    </div>
                    <div className={`${classes.column} col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
                      <img src={accessToTalentImg}/>
                    </div>
                  </div>
                  <div className={`${classes.hrDiv} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>

                  </div>
                  <div className={`${classes.row} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
                    <div className={`${classes.column} ${classes.textColumn} col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
                      <h1>Career Insights</h1>
                      <p>By analyzing current career trends in the global marketplace, Raines International provides valuable insights to give you an undeniable edge in determining the next step for you and your career.</p>
                      <p className={classes.link}><Link to="/ideas-and-insights/career-insights">View Career Insights <span className={`glyphicon glyphicon-menu-right ${classes.icon}`} aria-hidden="true"></span></Link></p>
                    <div className={`${classes.column} col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
                      <img src={careerInsightsImg}/>
                    </div>
                    </div>
                  </div>      
                </div>
              )
            case "small":
            case "medium":
            case "large":
            default:
              return (
                <div className={`${classes.inner}`}>
                  <hr className={classes.hr}/>
                  <img
                    className={classes.splashImage}
                    src={introImg}/>
                  <hr className={classes.hr}/>
                  <div className={`${classes.row} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
                    <div className={`${classes.column} col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
                      <img src={thoughtLeadershipImg}/>
                    </div>
                    <div className={`${classes.column} ${classes.textColumn} ${classes.right} right col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
                      <h1>Thought Leaders</h1>
                      <p>With more than 45 years of experience working with top talent, Raines International shares our industry and functional expertise to keep you prepared for the issues businesses face today.</p>
                      <p className={classes.link}><Link to="/ideas-and-insights">View Ideas & Insights <span className={`glyphicon glyphicon-menu-right ${classes.icon}`} aria-hidden="true"></span></Link></p>
                    </div>
                  </div>
                  <div className={`${classes.hrDiv} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
                    <hr className={classes.hr}/>
                  </div>
                  <div className={`${classes.row} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
                    <div className={`${classes.column} ${classes.textColumn} ${classes.left} left col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
                      <h1>Access to Talent</h1>
                      <p>Meet successful executive leaders through our profiles and recent Raines International placements to stay on top of the latest in leadership and career strategies.</p>
                      <p className={`${classes.link} ${classes.link1}`}><Link to="/profiles-and-interviews">View Profiles <span className={`glyphicon glyphicon-menu-right ${classes.icon}`} aria-hidden="true"></span></Link></p>
                      <p className={`${classes.link} ${classes.link2}`}><Link to="/placements">View Placements <span className={`glyphicon glyphicon-menu-right ${classes.icon}`} aria-hidden="true"></span></Link></p>
                    </div>
                    <div className={`${classes.column} col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
                      <img src={accessToTalentImg}/>
                    </div>
                  </div>
                  <div className={`${classes.hrDiv} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
                    <hr className={classes.hr}/>
                  </div>
                  <div className={`${classes.row} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
                    <div className={`${classes.column} col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
                      <img src={careerInsightsImg}/>
                    </div>
                    <div className={`${classes.column} ${classes.textColumn} ${classes.right} right col-lg-6 col-md-6 col-sm-12 col-xs-12`}>
                      <h1>Career Insights</h1>
                      <p>By analyzing current career trends in the global marketplace, Raines International provides valuable insights to give you an undeniable edge in determining the next step for you and your career.</p>
                      <p className={classes.link}><Link to="/ideas-and-insights/career-insights">View Career Insights <span className={`glyphicon glyphicon-menu-right ${classes.icon}`} aria-hidden="true"></span></Link></p>
                    </div>
                  </div>      
                </div>
              )
          }
        })()}
        
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mediaType: state.browser.mediaType
})

export default connect(mapStateToProps)(WhoWeAre);