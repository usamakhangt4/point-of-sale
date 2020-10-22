import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Pos, Login, StoreAndRegister } from './pages';
import './App.scss';
import AuthService from './services/AuthService'
import getAuthHeader from "./services/auth-header"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"

class App extends Component {
  state = {
    isLoggedin: false
  }

  componentDidMount() {
    let authorizationHeader = getAuthHeader();
    if (!authorizationHeader) {
      this.setUserLoggedoff();
    } else {
      AuthService.authorize(authorizationHeader).then(response => {
        if (response.data.token && response.data.status === "success") {
          this.setState({ isLoggedin: true })
        }
        else {
          this.setUserLoggedoff();
        }
      })
        .catch(err => this.setUserLoggedoff())
    }
  }

  setUserLoggedoff = () => {
    this.setState({ isLoggedin: false })
  }

  render() {
    const { isLoggedin } = this.state;
    return (
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <PrivateRoute exact path='/' isLoggedin={isLoggedin} component={Pos} />
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
