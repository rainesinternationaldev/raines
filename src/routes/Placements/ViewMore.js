import React from 'react';
import classes from './Placements.scss';

export const ViewMore = ({
  viewMore
}) => (
  <div className={`${classes.viewMore} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
    <div className={classes.border}>
    </div>
    <div className={classes.buttonDiv}>
      <button onClick={viewMore} className={`${classes.viewMoreButton}`}>View More</button>
    </div>
    <div className={classes.border}>
    </div>
  </div>
);