import React, {Component} from 'react';
import Carousel from './Carousel';


class Accordion extends Component {
  state = {
    active: false,
  }

  toggleClass = () => {
    const currState = this.state.active;
    this.setState({
      active: !currState
    })
  }

  render() {
    return (
      // <div className={this.state.active ? "accordion accordion--expand" : "accordion"}>
      <div className="accordion accordion--expand">
        <button className="accordion__button" onClick={this.toggleClass}>
          <img src="../../assets/accordion-up.png" alt="button" className={this.state.active ? "accordion__icon accordion__icon--rotate" : "accordion__icon"}/>
        </button>
        <Carousel/>
      </div>
    )
  }
}

export default Accordion;