import React, { Fragment, useState } from 'react'

import {
  Link
} from '../components/link'

import AuthContainer from '../containers/auth'

import LoginWrapper from '../layout/LoginWrapper'

import styled from 'styled-components'

import Label from '../components/label'

import { Formik, ErrorMessage } from 'formik';

import LoginSchema from '../schemas/login'

import LoginField from '../components/field'
import LoginForm from '../components/form'
import LoginButton from '../components/button'
import LoginButtonSpinner from '../components/button/spinner'

const MonkeyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 120px;
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
  font-size: 300%;
  width: 100%;
  margin: 0;
`

export default function Login({ history }) {
  const [passwordFocused, setPwdFocused] = useState(false)
  return (
    <LoginWrapper>
      <Fragment>
        <MonkeyContainer>{passwordFocused ? "🙈" : "🐵"}</MonkeyContainer>
        <Logo>chat'D</Logo>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting }) => AuthContainer.login(values.email, values.password, history.pathname, setSubmitting)}
        >
          {({ isSubmitting, errors, touched }) => {
            return (
              <LoginForm>

                <LabelContainer>
                  <Label>Username / Email:</Label>
                  <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                </LabelContainer>
                <LoginField type="email" name="email" onFocus={() => setPwdFocused(false)} error={errors.email} touched={touched} autoComplete="username" />

                <LabelContainer>
                  <Label>Password:</Label>
                  <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                </LabelContainer>
                <LoginField type="password" name="password" onFocus={() => setPwdFocused(true)} error={errors.password} touched={touched} autoComplete="current-password" />

                <LoginButtonContainer>
                  <LoginButton type="submit" disabled={isSubmitting}>
                    {isSubmitting ? <LoginButtonSpinner /> : 'Login'}
                  </LoginButton>
                  <ResetLinkContainer>
                    <Link to="/forgot">
                      Forgot password?
                    </Link>
                    <Link to="/register">
                      Create an account
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