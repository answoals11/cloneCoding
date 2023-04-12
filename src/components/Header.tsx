import styled, { css } from "styled-components"
import Logo from "./Logo"

interface Props {
  isScroll: boolean
}

const Header: React.FC<Props> = ({ isScroll }) => {
  return (
    <Container isScroll={isScroll}>
      <LogoImage />
      <NavigatorConatiner>
        <Navigator>태그검색</Navigator>
        <Navigator>요일별 신작</Navigator>
        <Navigator>테마추천</Navigator>
        <Navigator>멤버십</Navigator>
      </NavigatorConatiner>
    </Container>
  )
}

export default Header

const Container = styled.div<{ isScroll: boolean }>`
  position: fixed;
  display: flex;
  align-items: center;

  width: 100%;
  height: 64px;

  padding: 0 53px;

  transition: 0.3s;
  z-index: 10;
  color: white;
  font-size: 14px;
  font-weight: bold;

  ${({ isScroll }) => {
    if (isScroll) {
      return css`
        background-color: #121212;
        box-shadow: 0 1px 0 0 #323232;
      `
    }
  }}
`
const LogoImage = styled(Logo)`
  width: 65px;
  height: 16px;
`
const NavigatorConatiner = styled.div`
  flex: 1;
  width: 100%;
  margin-left: 44px;
`
const Navigator = styled.a`
  cursor: pointer;
  & + & {
    margin-left: 24px;
  }
`
