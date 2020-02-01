import { Field } from 'formik'

import styled from 'styled-components'

export default styled(Field)`
  font-size: 1em;
  background: #eee;
  outline: none;
  border: none;
  padding: 10px 12px;
  border-radius: 5px;
  margin: 10px 0px;
  width: 100%;
  border: 2px solid ${props => props.error ? 'red' : 'transparent'};
  box-sizing: border-box;
`