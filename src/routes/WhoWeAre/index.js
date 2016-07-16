import React from 'react';
// import splashImage from './assets/city.jpeg'
import jessica from './assets/jessica.png';
import alison from './assets/alison.png';
import daniel from './assets/daniel.png';
import classes from './WhoWeAre.scss';

console.log(daniel)

export const WhoWeAre = () => (
  <div className={`${classes.whoWeAre} col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12`}>
    <div className={`${classes.inner}`}>
      <hr className={classes.hr}/>
      <img
        className={classes.splashImage}
        src="https://images.unsplash.com/photo-1432163230927-a32e4fd5a326?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=863c63e7e71fe3d25792265210c988f8"/>
      <div className={`${classes.banner} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
      	<hr/>
      	<div className={classes.center}>
      		<h3>Raines Perspectives: Helping Clients, Helping You</h3>
      	</div>
        <hr/>
      </div>
      <div className={classes.innerBody}>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <h3>Title Title Title Title</h3>
          <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text </p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <h3>Title Title Title Title</h3>
          <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text </p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <h3>Title Title Title Title</h3>
          <p>text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text </p>
        </div>
      </div>
      <div className={`${classes.ourPeople} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
        <h3>Our People</h3>
        <hr/>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <a href="http://rainesinternational.com/daniel-r.-smith.html"><img src={daniel}/></a>
          <p><span className={classes.name}>Daniel R. Smith</span> | Managing Director & COO</p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <a href="http://rainesinternational.com/jessica-t.-deoliveira.html"><img src={jessica}/></a>
          <p><span className={classes.name}>Jessica T. DeOliveira</span> | Consultant & Manager of ConsultantTrack</p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <a href="http://rainesinternational.com/alison-b.-hunter.html"><img src={alison}/></a>
          <p><span className={classes.name}>Alison B. Hunter</span> | Vice President</p>
        </div>
      </div>
    </div>
  </div>
);