import React from 'react'
import { Subscribe } from 'unstated'
import AuthContainer from '../../containers/auth'
import {
  Route as ReactRoute,
  Redirect,
} from 'react-router-dom'

const Route = (props) => {
  const { component: Component, noAuth, ...rest } = props
  return (
    <ReactRoute {...rest} render={(props) => (
      <Subscribe to={[AuthContainer]}>
        {authContainer =>
          noAuth || authContainer.user
            ? <Component {...props} />
            : <Redirect to='/login' />
        }
      </Subscribe>
    )} />
  )
}

export default Route