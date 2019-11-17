import React, {Component} from 'react';

class Slide extends Component {
  state = {
    img: this.props.img
  }

  render() {
    console.log(this.props, '<--- props')
    return (
      <div className="carousel__slide">
        <img src={this.state.img} alt="artist pic"/>
      </div>
    );
  }
}

export default Slide;