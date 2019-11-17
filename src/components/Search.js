import React, { Component } from 'react';
// import dotenv from 'dotenv';

class Search extends Component {

  state = {
    query: '',
  }

  componentDidMount() {
    this.getGenres()
  }

  getTracks = async () => {
    const tracks = await fetch('http://localhost:3030')
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
      <div className="search-container">
        <form className="search">
          <input 
          className="search-container__input"
          placeholder='Enter keyword, genre, or subgenre...'
          maxLength="100"
          ref={(input) => {this.search = input}}
          onChange={this.handleInputChange}
          />
          <button className="search-container__submit"><img src="../assets/search-icon.png" className="search-container__submit--icon" alt="search icon"/></button>
        </form>
        <ul id="artist-results"></ul>
      </div>
    )
}
}

export default Search;