import React, { Fragment } from 'react'

import Header from '../components/header'
import Feed from '../components/feed'


export default function Home() {
  return (
    <Fragment>
      <Header />
      <Feed />
    </Fragment>
  )
}