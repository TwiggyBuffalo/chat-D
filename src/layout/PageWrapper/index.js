import React from 'react'

import {
  PageContainer,
} from './styles'

export default function PageWrapper({ children: pageContent, center, col }) {
  return (
    <PageContainer center={center} col={col}>
      {pageContent}
    </PageContainer>
  )
}