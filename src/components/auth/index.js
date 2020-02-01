import React from 'react'
import { Subscribe } from 'unstated'
import AuthContainer from '../../containers/auth'
import {
  Route,
  Redirect,
} from 'react-router-dom'

export default ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    <Subscribe to={[AuthContainer]}>
      {authContainer =>
        authContainer.user
          ? <Component {...props} />
          : <Redirect to='/login' />
      }
    </Subscribe>
  )}
  />
)