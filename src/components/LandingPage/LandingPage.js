import React, {Component} from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
// core components

import SignUp from 'components/auth/SignUp'

import withStyles from "@material-ui/core/styles/withStyles";


const styles = theme => ({
    root: {
        fontFamily: `"Alef", sans-serif`,
    },
    grid: {
        flexGrow: 1,
    },
    primaryColor: {
        color: "#fd6a6c",
    },
    secondaryColor: {
        Color: "#93ecd5",

    },
});

class LandingPage extends Component {

    render() {
        const {
            auth,
            classes,
        } = this.props;

        return (
            <div className={classes.root}>
             
                <div className="container">
                
                

                     <div className="section">
                        <SignUp/>
                    </div>
                </div>
            </div>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([])
)(withStyles(styles)(LandingPage))
