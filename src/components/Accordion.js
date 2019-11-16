import React, {Component} from 'react';

class Accordion extends Component {
  state = {
    active: true,
  }

  toggleClass = () => {
    const currState = this.state.active;
    this.setState({
      active: !currState
    })
  }

  render() {
    return (
      <div className="accordion">
        <button className="accordion__button" onClick={this.toggleClass}>►</button>
      </div>
    )
  }
}

export default Accordion;