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
  border: 2px solid ${props => props.error && props.touched[props.name] ? 'red' : '#ccc'};
  box-sizing: border-box;
  box-shadow: inset 0 2px 10px 0 rgba(134,141,155,0.2);
`