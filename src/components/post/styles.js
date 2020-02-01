import styled, { keyframes } from 'styled-components'

export const Title = styled.div`
  height: 20px;
  width: 170px;
  border-radius: 10px;
  opacity: 0.1;
  background-color: #000;
  margin-left: 25px;
  margin-top: 17px;
`

export const Tile = styled.div`
  opacity: 0.7;
  height: 230px;
  width: 650px;
  background-color: #fff;
  border-radius: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  margin-top: 30px;
  box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.15);
`;

const move = keyframes`
  from {
    transform: translate(-400px, 400px) rotate(45deg);
  }

  to {
    transform: translate(300px, -200px) rotate(45deg);
  }
`;

export const Shimmer = styled.div`
  height: 60px;
  width: 900px;
  opacity: 0.1;
  animation: ${move} 1s linear infinite;
  background-color: white;
`;