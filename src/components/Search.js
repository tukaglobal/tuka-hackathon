import React, { Component } from 'react';

class Search extends Component {

  state = {
    query: '',
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }
  render() {
    return (
      <div>
        <form className="search">
          <input 
          placeholder='Enter keyword, genre, or subgenre...'
          maxLength="100"
          ref={(input) => {this.search = input}}
          onChange={this.handleInputChange}
          />
          <button type="submit">Search</button>
        </form>
        <ul id="artist-results"></ul>
      </div>
    )
}
}

export default Search;