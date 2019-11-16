import React, { Component } from 'react';

class Search extends Component {

  state = {
    query: '',
  }

  componentDidMount() {
    this.getGenres
  }

  getGenres = async () => {
    try {
      const genres = await fetch(`https://hackathon.umusic.com/prod/v1/tracks`, {
        schema: loadJSON(__dirname + "/streaming.json"),
        // baseURL: 'https://hackathon.umusic.com/prod',
        extraHeaders: {
          'x-api-key': process.env.UMG_API_KEY
        },
        type: 'text'
      })
      const genresJSON = await genres.json();
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