import React from "react"
import Slider, { Settings } from "react-slick"
import styled from "styled-components"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

interface Props {
  settings?: Settings
  children: React.ReactNode
}

const Carousel: React.FC<Props> = ({ settings, children }) => {
  const defaultSettings: Settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: (
      <Pre>
        <PreIcon />
      </Pre>
    ),
    nextArrow: (
      <NextTo>
        <NextIcon />
      </NextTo>
    ),
    ...settings,
  }
  return (
    <React.Fragment>
      <StyledSlider {...defaultSettings}>{children}</StyledSlider>
    </React.Fragment>
  )
}

const Pre = styled.div`
  position: absolute;
  left: 6px;
  z-index: 3;
`
const NextTo = styled.div`
  position: absolute;
  right: 6px;
  z-index: 3;
`
const PreIcon = styled(FiChevronLeft)`
  display: flex;
  width: 25px;
  height: 25px;
  color: white;
`
const NextIcon = styled(FiChevronRight)`
  display: flex;
  width: 25px;
  height: 25px;
  color: white;
`

const StyledSlider = styled(Slider)`
  position: relative;
  width: 100%;
  height: 642px;

  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }

  .slick-dots {
    text-align: right;
    right: 37px;
    bottom: 57px;

    .slick-active {
      button:before {
        color: white !important;
      }
    }
    li {
      margin: 0 2.3px;
      button:before {
        font-size: 15px;
        opacity: 1;
        color: rgba(255, 255, 255, 0.3) !important;
      }
    }
  }
`

export default Carousel
