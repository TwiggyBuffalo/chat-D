
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Provider } from 'unstated'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import Forgot from './pages/Forgot'

import ProtectedRoute from './components/auth'

export default class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgot" component={Forgot} />
            <ProtectedRoute path="/profile" component={Profile} />
            <ProtectedRoute path="/" component={Home} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}