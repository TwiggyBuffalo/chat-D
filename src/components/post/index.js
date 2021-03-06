import React, { Fragment } from 'react'

import {
  Tile,
  Shimmer,
  Title
} from './styles'


export default function Post(props) {
  const { title } = props
  return (
    <Fragment>
      <Tile>
        <Shimmer />
        <Title>{title}</Title>
      </Tile>
    </Fragment>
  )
}