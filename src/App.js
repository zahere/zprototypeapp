import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import LandingPage from 'components/LandingPage/LandingPage'
import SignIn from 'components/auth/SignIn'
import SignUp from 'components/auth/SignUp'
import Footer from "components/Footer/Footer.jsx";
import LoadingBar from 'react-redux-loading-bar'

class App extends Component {

  render() {
    
    return (

      <BrowserRouter>

        <div className="App">

          <Navbar/>
          <LoadingBar />



          <Switch>
            <Route exact path = '/'
            component = {
              LandingPage
            }
            />
           
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />

          </Switch>
      <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;