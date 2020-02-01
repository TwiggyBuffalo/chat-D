import React, { Fragment, useState } from 'react'
import { Subscribe } from 'unstated'
import AuthContainer from '../containers/auth'

import LoginWrapper from '../layout/LoginWrapper'

import toast from 'just-toasty'

import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function Login() {
  const [loginAttempts, setLoginAttemps] = useState(0)
  return (
    <LoginWrapper>
      <Subscribe to={[AuthContainer]}>
        {authContainer => (
          <Fragment>
            <h1>Login</h1>
            <Formik
              initialValues={{ email: '', password: '' }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                const { email, password } = values
                authContainer.login(email, password).then(response => {
                  toast('Redirecting...')
                  window.location.href = '/'
                }).catch(error => {
                  if (loginAttempts <= 3) {
                    toast('Login unsucessful. Please check your email and password.')
                    setLoginAttemps(loginAttempts + 1)
                  } else {
                    toast('Hmmm... Maybe try resetting your password?')
                  }

                })
                setSubmitting(false)
                // authContainer.login()
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field type="email" name="email" />
                  <ErrorMessage name="email" component="div" />
                  <Field type="password" name="password" />
                  <ErrorMessage name="password" component="div" />
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
                </Form>
              )}
            </Formik>
          </Fragment>
        )}
      </Subscribe>
    </LoginWrapper>
  )
}