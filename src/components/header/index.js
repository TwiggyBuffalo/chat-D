import React from 'react'

import {
  Link,
} from "react-router-dom";

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
} from 'react-feather'

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <LogoText>chat'D</LogoText>
      </Link>
      <SearchBarContainer>
        <Search />
      </SearchBarContainer>
      <HeaderLinks>
        <HeaderIcon>
          <TrendingUp alt="trending" />
        </HeaderIcon>
        <HeaderIcon>
          <Link to="/profile">
            <User alt="profile" />
          </Link>
        </HeaderIcon>
      </HeaderLinks>
    </StyledHeader>
  )
}