import React from 'react'

import {
  User,
} from 'react-feather'

import {
  Card,
  CardTop,
  AvatarContainer,
  ProfileName,
  ProfileEmail,
  ProfileDetails,
  Bio,
  Pills,
  PillButton,
  PillCount,
} from './styles'

export default function ProfileCard(props) {
  const { name, email, bio, followers, following, posts } = props
  return (
    <Card>
      <CardTop>
        <AvatarContainer>
          <User size="120" color="#666" />
        </AvatarContainer>
        <ProfileDetails>
          <ProfileName>{name}</ProfileName>
          <ProfileEmail>{email}</ProfileEmail>
        </ProfileDetails>
      </CardTop>
      <Bio>{bio}</Bio>
      <Pills>
        <PillButton>Posts: {posts}</PillButton>
        <PillButton>Followers: {followers}</PillButton>
        <PillButton>Following: <PillCount>{following}</PillCount></PillButton>
      </Pills>
    </Card>
  )
}