import styled from 'styled-components'

export const PageContainer = styled.div`
  margin-top: 60px;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: ${props => props.center ? 'center' : 'flex-start'};
  width: 100%;
  min-height: calc(100vh - 170px);
`