import React, { useRef } from 'react'
import { Subscribe } from 'unstated'
import AuthContainer from '../../containers/auth'

export default function Login() {
  const email = useRef(null)
  const password = useRef(null)
  return (
    <Subscribe to={[AuthContainer]}>
      {authContainer => {
        return (
          <form onSubmit={() => authContainer.register(email, password)}>
            <input type="text" ref={email} name="email" />
            <input type="password" ref={password} name="password" />
          </form>
        )
      }}
    </Subscribe>
  )
}