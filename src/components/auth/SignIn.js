import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import {
  Redirect
} from 'react-router-dom'
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import Typography from '@material-ui/core/Typography';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";



class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
   // console.log(this.state)
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
    this.props.history.push('/')
  }
  render() {
    const {
     
      authError,
      auth,
      classes
    } = this.props;
    if (auth.uid) return <Redirect to='/' /> 
    
    return (

      <div className={classes.container}>
      
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card >
              <form  onSubmit={this.handleSubmit}>
                <CardHeader color="info" className={classes.cardHeader}>
                  <h4>כניסה</h4>
                </CardHeader>
                <p className={classes.divider}> או <Link to="/signup"  className={classes.block}>הרשם עכשיו</Link></p>
                <CardBody>
                 
                 <div className="input-field col s6">
          <input  id="email" type="email"  onChange = {
               this.handleChange} className="validate" fullWidth />
          <label htmlFor="email">דוא"ל</label>
        </div>
           <div className="input-field col s6">
          <input  id="password" type="password"  onChange = {
               this.handleChange} className="validate" fullWidth />
          <label htmlFor="password">סיסמה</label>
        </div>
               <Typography variant="subtitle2" gutterBottom >
שכחתי סיסמה?
      </Typography>
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button type="submit"  color="primary" fullWidth size="lg">
                    כניסה
                      </Button>
                  
                </CardFooter>
                <div className="red-text">
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
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(loginPageStyle) (SignIn))
