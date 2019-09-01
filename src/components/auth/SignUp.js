import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from '@material-ui/core/Typography';
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import signupPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";
import {  signUp } from '../../store/actions/authActions'

// @material-ui/icons

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        displayName: '',
        phoneNumber: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
        //this.props.history.push('/login')
    }

    render() {
        const { auth, authError, classes } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (


            <div className={classes.container} id="signup-form">

                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={5}>
                        <Card>
                            <form onSubmit={this.handleSubmit}>
                                <CardHeader color="info" className={classes.cardHeader}>
                                    <h4>הרשמה</h4>
                                </CardHeader>
                                <p className={classes.divider}>או <Link to="/signin" className={classes.block}>הכנס
                                    עכשיו</Link></p>
                                <CardBody>

                                    <div className="input-field col s6">
                                        <input id="displayName" type="text" className="validate" onChange={
                                            this.handleChange} required />
                                        <label htmlFor="displayName">שם מלא</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="email" type="email" onChange={
                                            this.handleChange} className="validate" required />
                                        <label htmlFor="email">דוא"ל</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="phoneNumber" type="text" className="validate" onChange={
                                            this.handleChange} required />
                                        <label htmlFor="phoneNumber">מספר טלפון</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input id="password" type="password" onChange={
                                            this.handleChange} className="validate" required />
                                        <label htmlFor="password">סיסמה</label>
                                    </div>
                                    <br />
                                    <br />
                                    <Typography variant="subtitle2" gutterBottom>
                                        *בהרשמה לאתר אתה מאשר את תנאי השימוש
                                    </Typography>
                                </CardBody>
                                <CardFooter className={classes.cardFooter}>
                                    <Button type="submit" color="primary" fullWidth size="lg">
                                        התחל
                                    </Button>

                                </CardFooter>
                                <div className="center red-text">
                                    {authError ? <p className="center">{authError}</p> : null}
                                </div>
                            </form>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (creds) => dispatch(signUp(creds)),

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(signupPageStyle)(SignUp))