import React from 'react'
import Navbar from '../../components/Navbar'
import SubNavbar from '../../components/SubNavbar';
import classes from './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className={classes.global}>
    <Navbar />
    <SubNavbar />
    <div className={classes.mainContainer}>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
