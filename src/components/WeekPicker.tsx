import { useEffect, useState } from "react"
import styled, { css } from "styled-components"

interface Props {
  day: string
}

const WeekPicker: React.FC<Props> = ({ day }) => {
  const dayList = ["월", "화", "수", "목", "금", "토", "일"]
  const [selected, setSelected] = useState<string>("")

  useEffect(() => {
    const d = new Date()
    const week = new Array("일", "월", "화", "수", "목", "금", "토")
    setSelected(week[d.getDay()])
  }, [])

  return (
    <Container>
      {dayList.map((text) => {
        return (
          <Button
            selected={text === selected}
            onClick={() => setSelected(text)}
          >
            {text}
          </Button>
        )
      })}
    </Container>
  )
}

export default WeekPicker

const Container = styled.div`
  display: flex;
  align-items: center;

  margin: 12px 0 18px 0;
`
const Button = styled.button<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;

  border: none;
  border-radius: 50%;

  color: #f7f7f7;
  font-size: 18.7px;
  font-weight: bold;

  outline: none;
  cursor: pointer;

  & + & {
    margin-left: 23px;
  }

  ${({ selected }) => {
    if (selected) {
      return css`
        background-color: rgb(129, 107, 255);
      `
    } else {
      return css`
        background-color: #636363;
      `
    }
  }}
`
