import React from 'react'
import SignupBar from '../../../components/SignupBar';
import splashImage from '../assets/city.png'
import classes from './HomeView.scss'

export default class HomeView extends React.Component {
  render() {
    return (
      <div className={classes.home}>
        <div className={`${classes.inner} col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12`}>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <hr className={classes.hr}/>
            <img
              className={classes.splashImage}
              src={splashImage}/>
          </div>
          <div className={`${classes.banner} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <hr/>
            <div className={classes.center}>
              <h3>Well-Established. Well-Connected. Well-Informed.</h3>
            </div>
          </div>
          <SignupBar/>
          <div className={`${classes.featured} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <div className={`${classes.featuredArticles} col-lg-9 col-md-9 col-sm-9 col-xs-12`}>
              <h5>Featured Insights</h5>
              <hr />
              <div className={`${classes.imageContainer} col-lg-8 col-md-8 col-sm-8 col-xs-12`}>
                <img className={classes.featuredImage} src="https://images.unsplash.com/photo-1430609098125-581618d0482f?format=auto&amp;auto=compress&amp;dpr=2&amp;crop=entropy&amp;fit=crop&amp;w=1274&amp;h=849&amp;q=80"/>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <h4>Bridging global infrastructure gaps</h4>
                <p className="date-preview">June 2016</p>
                <p>Infrastructure systems are straining to meet demand, and the spending trajectory will lead to worsening gaps. But there are solutions to unlock financing and make the sector more productive.</p>
              </div>
            </div>
            <div className={`${classes.mostRecent} col-lg-3 col-md-3 col-sm-3 col-xs-12`}>
              <h5>Most Recent</h5>
              <hr/>
              <div className={classes.article}>
                <p className={classes.topicPreview}>Topic</p>
                <h4>An incumbent's guide to digital disruption</h4>
              </div>
              <div className={classes.article}>
                <p className={classes.topicPreview}>Topic</p>
                <h4>An incumbent's guide to digital disruption</h4>
              </div>
              <div className={classes.article}>
                <p className={classes.topicPreview}>Topic</p>
                <h4>An incumbent's guide to digital disruption</h4>
              </div>
            </div>
            {
              // <div className={`${classes.end} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
              //   <hr/>
              // </div>
            }
          </div>
          <div className={`${classes.perspectives} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <h5>New Perspectives</h5>
            <hr/>
            <div className={`${classes.article} col-lg-4 col-md-4 col-sm-4 col-xs-12`}>
              <img className={classes.perspectiveImage} src="https://images.unsplash.com/photo-1430609098125-581618d0482f?format=auto&amp;auto=compress&amp;dpr=2&amp;crop=entropy&amp;fit=crop&amp;w=1274&amp;h=849&amp;q=80"/>
              <h6>Responding to the global refuge crisis</h6>
            </div>
            <div className={`${classes.article} col-lg-4 col-md-4 col-sm-4 col-xs-12`}>
              <img className={classes.perspectiveImage} src="https://images.unsplash.com/photo-1430609098125-581618d0482f?format=auto&amp;auto=compress&amp;dpr=2&amp;crop=entropy&amp;fit=crop&amp;w=1274&amp;h=849&amp;q=80"/>
              <h6>Responding to the global refuge crisis</h6>
            </div>
            <div className={`${classes.article} col-lg-4 col-md-4 col-sm-4 col-xs-12`}>
              <img className={classes.perspectiveImage} src="https://images.unsplash.com/photo-1430609098125-581618d0482f?format=auto&amp;auto=compress&amp;dpr=2&amp;crop=entropy&amp;fit=crop&amp;w=1274&amp;h=849&amp;q=80"/>
              <h6>Responding to the global refuge crisis</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}