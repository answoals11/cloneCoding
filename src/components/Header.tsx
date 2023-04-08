import styled from "styled-components"

interface Props {
  isScroll: boolean
}

const Header: React.FC<Props> = ({ isScroll }) => {
  return (
    <Container isScroll={isScroll}>
      <div>Laftel</div>
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

  padding: 0 3.125rem;

  transition: 0.3s;
  z-index: 10;
  color: white;
  background-color: ${({ isScroll }) => (isScroll ? "black" : "none")};
`
