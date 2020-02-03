import styled from 'styled-components'

export default styled.div`
  display: inline-block;
  width: 0.80em;
  height: 0.80em;
  vertical-align: text-bottom;
  border: .20em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-animation: rotate .75s linear infinite;
  animation: rotate .75s linear infinite;

  @keyframes rotate {
    100% { transform: rotate(360deg) }
  }
`