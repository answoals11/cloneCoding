import React from "react"
import Slider, { Settings } from "react-slick"
import styled from "styled-components"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

interface Props {
  children: React.ReactNode
}

const Carousel: React.FC<Props> = ({ children }) => {
  // useMemo를 써야할까?
  const settings: Settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  }

  return (
    <React.Fragment>
      <StyledSlider {...settings}>{children}</StyledSlider>
    </React.Fragment>
  )
}

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 642px;
`

export default Carousel
