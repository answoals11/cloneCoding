import styled from "styled-components"

interface Props {
  title: string
  titleOption?: React.ReactNode
  option?: React.ReactNode
  contents: any
}

const Section: React.FC<Props> = ({ title, titleOption, option, contents }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {option && <Option>{option}</Option>}
    </Container>
  )
}

export default Section

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #f7f7f7;
`

const Title = styled.div`
  padding: 0px 39px;
  margin-bottom: 6px;

  font-size: 22px;
  font-weight: bold;
`
const Option = styled.div`
  display: flex;
  padding: 0px 39px;
`
