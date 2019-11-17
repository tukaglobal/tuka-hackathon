import React, { Component } from 'react';
// import dotenv from 'dotenv';

class Search extends Component {

  state = {
    tracks: [],
    trackMetadata: []
  }

  componentDidMount() {
    this.getTracks()
    this.getTrackMetadata()
  }

  getTracks = async () => {
    try {
      const tracks = await fetch(`https://hackathon.umusic.com/prod/v1/tracks`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-api-key': 'xmN6Ijjcxy1GzOGsOcu1a6EpbSden1c64P3r5bQh',
          'Access-Control-Allow-Origin': '*'
        }
      })
      const tracksJSON = await tracks.json();
      console.log(tracksJSON.tracks[2], 'tracksJSON')
      this.setState({tracks: tracksJSON}, () => {
        console.log(this.state.tracks)
      })
      
    } catch (error) {
      console.log(error, "error in catch")
    }
  } 
  //test with a specific ISRC just to see the data set
  getTrackMetadata = async () => {
    try {
      const trackMetadata = await fetch(`https://hackathon.umusic.com/prod/v1/tracks/USKRS0326911`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-api-key': 'xmN6Ijjcxy1GzOGsOcu1a6EpbSden1c64P3r5bQh',
          'Access-Control-Allow-Origin': '*'
        }
      })
      const trackMetadataJSON = await trackMetadata.json();
      console.log(trackMetadataJSON.track.creative, 'tracksJSON')
      this.setState({trackMetadata: trackMetadataJSON}, () => {
        console.log(this.state.trackMetadata)
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