import styled from 'styled-components'

import {
  Link as RouterLink
} from 'react-router-dom'

export const Link = styled(RouterLink)`
  outline: none;
  text-decoration: none;
  color: #000;
  &:focus {
    outline: none;
    text-decoration: none;
  }
  &:hover {
    text-decoration: underline;
  }
`