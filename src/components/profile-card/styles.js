import styled from 'styled-components'

export const Card = styled.div`
  height: 250px;
  max-width: 600px;
  width: 100%;
  border-radius: 25px;
  box-shadow: 0 2px 10px 0 rgba(134,141,155,0.5);
  display: flex;
  padding: 30px;
  flex-direction: column;
`

export const CardTop = styled.div`
  width: 100%;
  display: flex;
`

export const AvatarContainer = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 100%;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export const ProfileDetails = styled.div`
  height: 120px;
  margin-left: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const ProfileName = styled.div`
  font-size: 34px;
  margin: 5px 0;
  font-weight: 500;
`

export const ProfileEmail = styled.div`
  font-size: 28px;
  margin: 5px 0;
  font-weight: 400;
`

export const Bio = styled.div`
  font-size: 18px;
  margin: 5px 0;
  font-weight: 500;
  margin-top: 15px;
`

export const Pills = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`

export const PillButton = styled.div`
  border-radius: 20px;
  width: 190px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  font-weight: 700;
  color: #fff;
`

export const PillCount = styled.span`
  font-weight: 900;
`