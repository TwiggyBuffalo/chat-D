import React, { Fragment } from 'react'

import Header from '../components/header'
import Feed from '../components/feed'

import PageWrapper from '../layout/PageWrapper'

export default function Home() {
  return (
    <Fragment>
      <Header />
      <PageWrapper>
        <Feed />
      </PageWrapper>
    </Fragment>
  )
}