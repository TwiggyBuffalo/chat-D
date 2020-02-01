import styled from 'styled-components'

export const StyledHeader = styled.header`
  height: 60px;
  width: 100%;
  box-shadow: 0 2px 10px 0 rgba(134,141,155,0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  background: #fff;
  position: fixed;
  top: 0;
  z-index: 99999;
`

export const LogoText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
  margin: 0 10px;
  color: #333;
  height: 100%;
  max-height: 100px;
  padding-bottom: 5px;
  letter-spacing: -1.5px;
  text-decoration: none;
`

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 450px;
  margin: 0 10px;
`

export const Search = styled.input.attrs({
  type: 'text',
  name: 'search',
  alt: 'search',
  placeholder: 'Search...'
})`
  width: 100%;
  height: 40px;
  background: #fff;
  border-radius: 10px;
  outline: none;
  font-size: 14px;
  line-height: 40px;
  font-weight: 400;
  padding: 0 10px;
  border: none;
  box-shadow: inset 0 2px 10px 0 rgba(134,141,155,0.2);
  ::placeholder {
    color: #bbb;
    font-weight: 500;
  }
`

export const HeaderLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
`

export const HeaderIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    background: #eee;
  }
`