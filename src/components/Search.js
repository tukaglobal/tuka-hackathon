import React, { Component } from 'react';
// import dotenv from 'dotenv';

class Search extends Component {

  state = {
    query: '',
  }

  componentDidMount() {
    this.getGenres()
  }

  getGenres = async () => {
    try {
      const genres = await fetch(`https://hackathon.umusic.com/prod/v1/tracks`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-api-key': 'xmN6Ijjcxy1GzOGsOcu1a6EpbSden1c64P3r5bQh',
          'Access-Control-Allow-Origin': '*'
        }
      })
      const genresJSON = await genres.json();
      console.log(genresJSON.tracks[2]['isrc'], 'genresJSON')
      this.setState({query: genresJSON}, () => {
        console.log(this.state.query)
      })
      
    } catch (error) {
      console.log(error, "error in catch")
    }
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