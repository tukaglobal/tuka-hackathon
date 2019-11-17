import React, {Component} from 'react';

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
      <div className={this.state.active ? "accordion accordion--expand" : "accordion"}>
        <button className="accordion__button" onClick={this.toggleClass}>
          <img src="../../assets/arrow-right.png" alt="arrow right button" className={this.state.active ? "accordion__icon accordion__icon--rotate" : "accordion__icon"}/>
        </button>
      </div>
    )
  }
}

export default Accordion;