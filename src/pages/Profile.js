import React, { Fragment } from 'react'

// components
import Header from '../components/header'
import ProfileCard from '../components/profile-card'

// layout
import PageWrapper from '../layout/PageWrapper'

export default function Home() {
  return (
    <Fragment>
      <Header />
      <PageWrapper>
        <ProfileCard
          name="Daniel Curran"
          email="danielcurran@live.co.za"
          bio="A cool-guy software developer with a desire to create epic projects. In my past time I enjoy riding dirtbikes with my friends."
          followers={12}
          following={100}
          posts={0}
        />
      </PageWrapper>
    </Fragment>
  )
}