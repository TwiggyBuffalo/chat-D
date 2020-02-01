import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgb(150,150,150);
  background: radial-gradient(circle, rgba(150,150,150,1) 0%, rgba(2,5,4,1) 100%);
`

export const LoginCard = styled.div`
  width: 100%;
  max-width: 500px;
  height: 600px;
  box-shadow: 0 2px 10px 0 rgba(134,141,155,0.5);
  border-radius: 30px;
  padding: 20px 50px;
  background: #f7f7f7;
`