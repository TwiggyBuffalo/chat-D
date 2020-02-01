import React from 'react'

import {
  PageContainer,
} from './styles'

export default function PageWrapper({ children: pageContent, center }) {
  return (
    <PageContainer center={center}>
      {pageContent}
    </PageContainer>
  )
}