import React, { Fragment } from 'react'

import Header from '../components/header'
import Feed from '../components/feed'

import PageWrapper from '../layout/PageWrapper'

import { Subscribe } from 'unstated'
import AuthContainer from '../containers/auth'

export default function Home() {
  return (
    <Subscribe to={[AuthContainer]}>
      {authContainer => (
        <Fragment>
          <Header auth={authContainer.state.app}/>
          <PageWrapper>
            <Feed />
          </PageWrapper>
        </Fragment>
      )}
    </Subscribe>
  )
}