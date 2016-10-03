import React from 'react';
import {Link} from 'react-router';
import classes from './SubNavbar.scss';
import {connect} 							from 'react-redux';

class SubNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { mediaType } = this.props;
    let ulResponsive = `subnavList-${mediaType}`;
    // let liResponsive = `navLink-${mediaType}`;
    return (
      <div className={`${classes.subNavbar} subNavbar`}>
        <div className={`${classes.inner} col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12`}>
          <div className="center col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h1><Link to="/">raines perspectives</Link></h1>
            <hr className={classes.middleHr}/>
            <ul className={`${classes.subnavList} ${classes[ulResponsive]}`}>
              <li><Link to="/who-we-are">Who We Are</Link></li>
              <li><Link to="/ideas-and-insights">Ideas & Insights</Link></li>
              <li><Link to="/profiles-and-interviews">Profiles</Link></li>
              <li><Link to="/placements">Placements</Link></li>
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

export default connect(mapStateToProps)(SubNavbar);