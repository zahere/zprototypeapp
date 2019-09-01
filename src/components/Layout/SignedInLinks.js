import React from 'react'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'
import {Link} from 'react-router-dom';
// @material-ui/core components

import withStyles from "@material-ui/core/styles/withStyles";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";




const SignedInLinks = (props) => {

    return (
        
        <div className="full-width" >
            <nav>
                <div className="nav-wrapper">

                    <ul className="navbar-sec  hide-on-med-and-down">



                        <li className="active"><Link to='/'>ZPrototype</Link></li>
                        <li>|</li>
                        
                        
                        <li><a href='/'  onClick={props.signOut} >Logout</a></li>

                        

                    </ul>
                </div>
            </nav>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
};

export default connect(null, mapDispatchToProps)(withStyles(headerLinksStyle)(SignedInLinks))
