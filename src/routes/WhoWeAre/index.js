import React from 'react';
import classes from './WhoWeAre.scss';

export const WhoWeAre = () => (
  <div className={`${classes.whoWeAre} col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12`}>
    <div className={`${classes.inner}`}>
      <hr className={classes.hr}/>
      <img
        className={classes.splashImage}
        src="https://images.unsplash.com/photo-1432163230927-a32e4fd5a326?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=863c63e7e71fe3d25792265210c988f8"/>
      
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
      
    </div>
  </div>
);