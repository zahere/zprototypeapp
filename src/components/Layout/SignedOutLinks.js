import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

import withStyles from "@material-ui/core/styles/withStyles";


import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

const styler = {
  margin: 0,
  top: 6,
bottom:20,
  left: 90,
  position: 'fixed',
  width:50,
  height:50
};

const SignedOutLinks = (props) => {
  //const {} = props;
  return (
    
    <nav>
    <div className="container">
      <ul className="navbar-sec">
        
        <li><Link to='/'>ZPrototype</Link></li>
        <li><Link  to='/signup' >Join</Link></li>
        <li>   </li>

        <li><Link  to='/signin' >Signin</Link></li>

      </ul>
    </div>
    </nav>
  )
}

export default withStyles(headerLinksStyle)(SignedOutLinks)