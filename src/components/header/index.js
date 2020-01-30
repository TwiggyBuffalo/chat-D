import React from 'react'

import {
  StyledHeader,
  SearchBarContainer,
  LogoText,
  Search,
  HeaderLinks,
  HeaderIcon,
} from './styles'

import {
  User,
  TrendingUp,
  Send,
} from 'react-feather'

export default function Header() {
  return (
    <StyledHeader>
      <LogoText>chat'D</LogoText>
      <SearchBarContainer>
        <Search />
      </SearchBarContainer>
      <HeaderLinks>
        <HeaderIcon>
          <TrendingUp alt="trending" />
        </HeaderIcon>
        <HeaderIcon>
          <User alt="profile" />
        </HeaderIcon>
        <HeaderIcon>
          <Send alt="inbox" />
        </HeaderIcon>
      </HeaderLinks>
    </StyledHeader>
  )
}