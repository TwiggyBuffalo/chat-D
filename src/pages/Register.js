import React, { Fragment } from 'react'

import {
  Link
} from '../components/link'

import LoginWrapper from '../layout/LoginWrapper'

import { Formik, ErrorMessage } from 'formik';

import Schema from '../schemas/login'

import AuthContainer from '../containers/auth'

import Field from '../components/field'
import Form from '../components/form'
import Button from '../components/button'
import Label from '../components/label'
import ButtonSpinner from '../components/button/spinner'

import {
  MonkeyContainer,
  Logo,
  Description,
  LabelContainer,
  LinkContainer,
  ButtonContainer,
} from '../styles/Login'

export default function Register({ history }) {

  return (
    <LoginWrapper>
      <Fragment>
        <MonkeyContainer>{`👋🏼`}</MonkeyContainer>
        <Logo>Welcome,</Logo>
        <Description>Enter your details below to create an account.</Description>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={Schema}
          onSubmit={(values, { setSubmitting }) => AuthContainer.register(values.email, values.password, history.pathname, setSubmitting)}
        >
          {({ isSubmitting, errors, touched }) => {
            return (
              <Form>

                <LabelContainer>
                  <Label>Email:</Label>
                  <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                </LabelContainer>
                <Field type="email" name="email" error={errors.email} touched={touched} autoComplete="username" />

                <LabelContainer>
                  <Label>Password:</Label>
                  <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                </LabelContainer>
                <Field type="password" name="password" error={errors.password} touched={touched} autoComplete="current-password" />

                <ButtonContainer>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? <ButtonSpinner /> : 'Join' }
                  </Button>
                  <LinkContainer>
                    <Link to="/login">
                      Back to Login
                    </Link>
                  </LinkContainer>
                </ButtonContainer>

              </Form>
            )
          }}
        </Formik>
      </Fragment>
    </LoginWrapper>
  )
}