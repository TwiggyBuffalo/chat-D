import React from 'react'

import Post from '../post'

import {
  Posts,
} from './styles'

export default function Feed(props) {
  const { children: posts } = props
  return (
    <Posts>
      <Post
        title="My first post"
      />
      <Post
        title="My first post"
      />
      <Post
        title="My first post"
      />
      <Post
        title="My first post"
      />
      <Post
        title="My first post"
      />
      <Post
        title="My first post"
      />
    </Posts>
  )
}