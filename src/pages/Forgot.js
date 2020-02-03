import React, { Fragment } from 'react'

import {
  Link
} from '../components/link'

import LoginWrapper from '../layout/LoginWrapper'

import styled from 'styled-components'

import Label from '../components/label'

import { Formik, ErrorMessage } from 'formik';

import AuthContainer from '../containers/auth'

import Schema from '../schemas/reset'

import LoginField from '../components/field'
import LoginForm from '../components/form'
import LoginButton from '../components/button'
import ButtonSpinner from '../components/button/spinner'

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
  justify-content: flex-end;
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
  return (
    <LoginWrapper>
      <Fragment>
        <MonkeyContainer>{`🤔`}</MonkeyContainer>
        <Logo>Can't remember?</Logo>
        <Description>We'll send you a link.</Description>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={Schema}
          onSubmit={(values, { setSubmitting }) => AuthContainer.reset(values.email, setSubmitting)}
        >
          {({ isSubmitting, errors, touched }) => {
            return (
              <LoginForm>
                <LabelContainer>
                  <Label>Email:</Label>
                  <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                </LabelContainer>
                <LoginField type="email" name="email" error={errors.email} touched={touched} autoComplete="username" />
                <LoginButtonContainer>
                  <LoginButton type="submit" disabled={isSubmitting}>
                    {isSubmitting ? <ButtonSpinner /> : 'I am a silly goose!'}
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