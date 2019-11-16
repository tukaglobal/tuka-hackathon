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
          <section class="artists">
            <form class="search-artists">
              <input name="query" type="search" maxlength="100"/>
              <button type="submit">Search Artists</button>
            </form>
            <ul id="artist-results"></ul>
          </section>
      </div>
    )
}
}

export default Search;