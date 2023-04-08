import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import styled from "styled-components"
import { getMainList } from "../apis/home"
import Header from "../components/Header"
import Carousel from "../components/Carousel"
import { CarouselType } from "../interfaces/carousel"
import { URL } from "url"

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
            data.map(({ web_img }) => {
              return <CarouselCard img={web_img} />
            })}
        </Carousel>
      </CarouselContainer>
    </Container>
  )
}

export default Home

const Container = styled.div`
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
