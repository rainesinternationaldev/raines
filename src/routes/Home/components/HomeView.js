import React from 'react'
import SignupBar from '../../../components/SignupBar';
import splashImage from '../assets/city.png'
import classes from './HomeView.scss'

export const HomeView = () => (
  <div className={classes.home}>
    <div className={`${classes.inner} col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12`}>
    	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
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
        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
          <h5>Featured Insights</h5>
          <hr/>
          <img className={classes.featuredImage} src="https://images.unsplash.com/photo-1430609098125-581618d0482f?format=auto&amp;auto=compress&amp;dpr=2&amp;crop=entropy&amp;fit=crop&amp;w=1274&amp;h=849&amp;q=80"/>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
          <h5>Most Popular</h5>
          <hr/>
        </div>
    </div>
  </div>
)

export default HomeView
