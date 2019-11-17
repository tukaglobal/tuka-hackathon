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
<<<<<<< HEAD
      <div>
        <form className="search">
          <input 
=======
      <div className="search-container">
        <form className="search">
          <input 
          className="search-container__input"
>>>>>>> ea8ac5216c5c9e7bb2f3ff6100595e4afe996d6e
          placeholder='Enter keyword, genre, or subgenre...'
          maxLength="100"
          ref={(input) => {this.search = input}}
          onChange={this.handleInputChange}
          />
<<<<<<< HEAD
          <button type="submit">Search</button>
=======
          <button className="search-container__submit"><img src="../assets/search-icon.png" className="search-container__submit--icon" alt="search icon"/></button>
>>>>>>> ea8ac5216c5c9e7bb2f3ff6100595e4afe996d6e
        </form>
        <ul id="artist-results"></ul>
      </div>
    )
}
}

export default Search;