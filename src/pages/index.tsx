import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import styled from "styled-components"
import { getMainList } from "../apis/home"
import Header from "../components/Header"
import Carousel from "../components/Carousel"
import { CarouselType } from "../interfaces/carousel"
import { FiChevronRight } from "react-icons/fi"

const Home = () => {
  const [scroll, setScroll] = useState<number>(0)

  const { data } = useQuery<CarouselType[]>("main", getMainList, {
    onError: (e) => {
      console.log("error: ", e)
    },
  })

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [scroll])

  const onScroll = () => {
    setScroll(window.scrollY)
  }

  return (
    <Container>
      <Header isScroll={scroll > 64} />
      <CarouselContainer>
        <Carousel>
          {data &&
            data.map(({ web_img, logo_img, content, button_text }) => {
              return (
                <>
                  <CarouselCard img={web_img} />
                  <DescribeContainer>
                    <Logo src={logo_img} />
                    <Content>{content}</Content>
                    <Button>
                      <ButtonText>{button_text}</ButtonText>
                      <Arrow />
                    </Button>
                  </DescribeContainer>
                </>
              )
            })}
        </Carousel>
      </CarouselContainer>
    </Container>
  )
}

export default Home

const Container = styled.div`
  position: relative;
  display: flex;
`
const CarouselContainer = styled.div`
  width: 100%;
  height: 642px;
`
const CarouselCard = styled.div<{ img: string }>`
  width: 100%;
  height: 642px;
  background-size: cover;
  background-image: url(${(props) => props.img});
`
const Logo = styled.img`
  height: 203px;
  object-fit: cover;
  margin-top: 10px;
`
const DescribeContainer = styled.div`
  position: absolute;
  left: 40px;
  top: 188px;
`
const Content = styled.div`
  margin-top: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  color: rgb(255, 255, 255);
  text-shadow: rgba(0, 0, 0, 0.4) 0px 0px 0.25em;
`
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 11px 11px 11px 18px;
  border: none;
  border-radius: 3px;
  margin-top: 19px;

  outline: none;
  background: rgb(255, 255, 255);
  cursor: pointer;
`
const ButtonText = styled.span`
  line-height: 20px;
  font-size: 19px;
  font-weight: bold;
  color: rgb(18, 18, 18);
`
const Arrow = styled(FiChevronRight)`
  width: 25px;
  height: 25px;
`
