import React, { Fragment, useState } from 'react'

import {
  Link
} from '../components/link'

import AuthContainer from '../containers/auth'

import LoginWrapper from '../layout/LoginWrapper'

import toast from 'just-toasty'
import styled from 'styled-components'

import Label from '../components/label'

import { Formik, ErrorMessage } from 'formik';

import LoginSchema from '../schemas/login'

import LoginField from '../components/field'
import LoginForm from '../components/form'
import LoginButton from '../components/button'

const MonkeyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 90px;
`

const LoginButtonContainer = styled.div`
  margin-top: 40px;
  justify-content: space-between;
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
`

const ResetLinkContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`

const Logo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
`

const Description = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #222;
`

export default function Login() {
  const doLogin = (values, { setSubmitting }) => {
    const { email, password } = values
    AuthContainer.login(email, password).then(response => {
      toast('Redirecting...')
      window.location.href = '/'
    }).catch(error => {
      if (loginAttempts <= 3) {
        toast('Login unsucessful. Please check your details and try again.')
        setLoginAttemps(loginAttempts + 1)
      } else {
        toast('Hmmm... Maybe try resetting your password?')
      }

    })
    setSubmitting(false)
    // authContainer.login()
  }

  const [passwordFocused, setPwdFocused] = useState(false)

  const [loginAttempts, setLoginAttemps] = useState(0)
  return (
    <LoginWrapper>
      <Fragment>
        <MonkeyContainer>{`👋🏼`}</MonkeyContainer>
        <Logo>Welcome,</Logo>
        <Description>Enter your details below to create an account.</Description>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={doLogin}
        >
          {({ isSubmitting, errors, touched }) => {
            console.log(touched)
            return (
              <LoginForm>

                <LabelContainer>
                  <Label>Email:</Label>
                  <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                </LabelContainer>
                <LoginField type="email" name="email" onFocus={() => setPwdFocused(false)} error={errors.email && touched.email} />

                <LabelContainer>
                  <Label>Password:</Label>
                  <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                </LabelContainer>
                <LoginField type="password" name="password" onFocus={() => setPwdFocused(true)} error={errors.password && touched.password} />

                <LoginButtonContainer>
                  <LoginButton type="submit" disabled={isSubmitting}>
                    Join
                  </LoginButton>
                  <ResetLinkContainer>
                    <Link to="/login">
                      Back to Login
                    </Link>
                  </ResetLinkContainer>
                </LoginButtonContainer>

              </LoginForm>
            )
          }}
        </Formik>
      </Fragment>
    </LoginWrapper>
  )
}