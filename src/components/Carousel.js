import React, {Component} from "react";
// import Slide from "./Slide";
 
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
      // return <Slide key={item.key} props={item}></Slide>
      return <div className="carousel__slide"><img src={item} alt="artist pic" key={index}/></div>
    })
    return slides;
  }

  render() {
    return (
      <div className="carousel">
        <button className="carousel__button carousel__button--left">
          <img src="../assets/arrow-left.png" alt="left arrow"/>
        </button>
        <div className="carousel__viewport">
          {this.renderSlides()}
        </div>
        <button className="carousel__button carousel__button--right">
          <img src="../assets/arrow-right.png" alt="right arrow"/>
        </button>
      </div>
    );
  }
}

export default Carousel;