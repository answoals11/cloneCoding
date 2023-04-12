import styled from "styled-components"

const WeekPicker = () => {
  return (
    <Container>
      <Button>월</Button>
      <Button>화</Button>
      <Button>수</Button>
      <Button>목</Button>
      <Button>금</Button>
      <Button>토</Button>
      <Button>일</Button>
    </Container>
  )
}

export default WeekPicker

const Container = styled.div`
  display: flex;
  align-items: center;

  margin: 12px 0 18px 0;
`
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;

  border: none;
  border-radius: 50%;
  background-color: #636363;

  color: #f7f7f7;
  font-size: 18.7px;
  font-weight: bold;

  outline: none;
  cursor: pointer;

  & + & {
    margin-left: 23px;
  }
`
