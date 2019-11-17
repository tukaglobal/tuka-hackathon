import React, {Component} from "react";
import scrollTo from './CarouselScrollAnimate';

class Carousel extends Component {
  state = {
    pics: [
      "http://placehold.jp/85x85.png",
      "http://placehold.jp/85x85.png",
      "http://placehold.jp/85x85.png",
      "http://placehold.jp/85x85.png",
      "http://placehold.jp/85x85.png",
      "http://placehold.jp/85x85.png",
      "http://placehold.jp/85x85.png",
      "http://placehold.jp/85x85.png",
      "http://placehold.jp/85x85.png",
      "http://placehold.jp/85x85.png",
      "http://placehold.jp/85x85.png",
      "http://placehold.jp/85x85.png",
      "http://placehold.jp/85x85.png",
      "http://placehold.jp/85x85.png",
      "http://placehold.jp/85x85.png",
    ]
  }

  renderSlides() {
    const slides = this.state.pics.map((item, index) => {
      return (
        <div className="carousel__slide" key={index}>
          <img src={item} alt="artist pic"/>
        </div>
      );
    })
    return slides;
  }

  handleLeftNav = (e) => {
    console.log('left clicked')
    const { carouselViewport } = this.refs;
    const numSlidesToScroll = 6;
    const slideWidth = 177;
    const newPosition = carouselViewport.scrollLeft - (numSlidesToScroll * slideWidth);
    const timePerSlide = 300;
    const totalScrollTime = timePerSlide * numSlidesToScroll;
    scrollTo({
      element: carouselViewport, 
      to: newPosition, 
      duration: totalScrollTime, 
      scrollDirection: 'scrollLeft'});
  }
  
  handleRightNav = (e) => {
    console.log('right clicked')
    const { carouselViewport } = this.refs;
    const numSlidesToScroll = 6;
    const slideWidth = 177;
    const newPosition = carouselViewport.scrollLeft + (numSlidesToScroll * slideWidth);
    const timePerSlide = 300;
    const totalScrollTime = timePerSlide * numSlidesToScroll;
    scrollTo({
      element: carouselViewport, 
      to: newPosition, 
      duration: totalScrollTime, 
      scrollDirection: 'scrollLeft'});
  }

  render() {
    return (
      <div className="carousel">
        <button className="carousel__button carousel__button--left" onClick={this.handleLeftNav}>
          <img src="../assets/arrow-left.png" alt="left arrow"/>
        </button>
        <div className="carousel__viewport" ref="carouselViewport">
          {this.renderSlides()}
        </div>
        <button className="carousel__button carousel__button--right" onClick={this.handleRightNav}>
          <img src="../assets/arrow-right.png" alt="right arrow"/>
        </button>
      </div>
    );
  }
}

export default Carousel;