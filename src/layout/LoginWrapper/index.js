import React from 'react'

import {
  Wrapper,
  LoginCard
} from './styles'

export default function LoginWrapper({ children }) {
  return (
    <Wrapper>
      <LoginCard>
        {children}
      </LoginCard>
    </Wrapper>
  )
}