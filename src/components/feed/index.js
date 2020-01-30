import React from 'react'

import Post from '../post'

import {
  FeedContainer,
  Posts,
} from './styles'

export default function Feed(props) {
  const { children: posts } = props
  return (
    <FeedContainer>
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
    </FeedContainer>
  )
}