/*eslint-disable*/
import React from "react";
import {
  Link
} from 'react-router-dom'
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";

// @material-ui/icons

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
           
            <ListItem className={classes.inlineBlock}>
              <Link to="/about"
               
                className={classes.block}
               
              >
                מי אנחנו?
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
            <Link to="/terms-of-use"
              
               
                className={classes.block}
               
              >
                 תנאי שימוש באתר
              
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
             <Link to="/"
                className={classes.block}
               
              >
                ZPrototype
              </Link>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , 
           כל הזכויות שמורות 

        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
