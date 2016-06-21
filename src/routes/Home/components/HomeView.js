import React from 'react'
import splashImage from '../assets/city.png'
import classes from './HomeView.scss'

export const HomeView = () => (
  <div className={classes.home}>
    <div className="col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12">
    	<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      	<img
    	  	className={classes.splashImage}
      		src={splashImage}/>
      	<hr/>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      	<div className={classes.center}>
      		<h3>Well-Established. Well-Connected. Well-Informed.</h3>
      	</div>
      	<hr/>
      </div>
      <div className={`"col-lg-12 col-md-12 col-sm-12 col-xs-12" ${classes.signup}`}>
        <div className={classes.inner}>
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <input/>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <input/>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <input/>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <button>Register</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default HomeView
