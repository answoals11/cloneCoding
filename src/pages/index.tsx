import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import styled from "styled-components"
import { getMainList } from "../apis/home"
import Header from "../components/Header"
import Carousel from "../components/Carousel"
import { CarouselType } from "../interfaces/carousel"

const Home = () => {
  const [scroll, setScroll] = useState<number>(0)

  const { data } = useQuery<CarouselType[]>("main", getMainList, {
    onSuccess: (data) => {
      console.log("success", data)
    },
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
      <Carousel>
        {data &&
          data.map(({ web_img }) => {
            return <img src={web_img} />
          })}
      </Carousel>
    </Container>
  )
}

export default Home

const Container = styled.div`
  display: flex;
  height: 1200px;
`
const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
`
