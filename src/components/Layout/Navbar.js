import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux'
// @material-ui/core components
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";


import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withTheme } from '@material-ui/core';



const pathname = window.location.pathname;
const headerColor2 = pathname === '/' ? { boxShadow: "0px 0px 2px 0px rgba(156, 39, 176, 0.14)"} : { boxShadow: "0px 0 0px 0px rgba(156, 39, 176, 0.14)" }
console.log(pathname)


const styles = theme => ({});
const Navbar = (props) => {
  const {auth, profile} = props;
  const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>;


  
  return (
    <div className="m-container nav-bar navbar-fixed" style = {headerColor2}>
      <div className="row row-margin">
        {links}
      </div>
   
    </div>
    
  )
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
};
Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default connect(mapStateToProps)(withStyles(styles)(Navbar))
