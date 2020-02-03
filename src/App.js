
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import { Provider } from 'unstated'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import Forgot from './pages/Forgot'

import Route from './components/routes'

export default class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <Switch>
            <Route path="/login" component={Login} noAuth/>
            <Route path="/register" component={Register} noAuth/>
            <Route path="/forgot" component={Forgot} noAuth/>
            <Route path="/profile" component={Profile} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}