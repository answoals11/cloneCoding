import { CarouselType } from "../interfaces/carousel"

export class Carousel {
  constructor(data: CarouselType) {
    this.web_img = data.web_img
  }
  public web_img: string
}
