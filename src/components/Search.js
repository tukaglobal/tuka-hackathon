import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
// import dotenv from 'dotenv';

class Search extends Component {

  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };

  static defaultProps = {
    suggestions: []
  };

  constructor(props) {
    super(props);

    this.state = {
      tracks: [],
      trackMetadata: [],
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ""
    };
  }

  onChange = e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  onClick = e => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

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

    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="search__suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "search__suggestion-active";
              }

              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div class="search__no-suggestions">
            <em>No suggestions, try a genre!</em>
          </div>
        );
      }
    }

// old return and new return below... 

    return (
      <div className="search">
        <form className="search__form">
          <Fragment>
          <input 
          className="search__input"
          placeholder='Enter keyword, genre, or artist'
          type="text"
          maxLength="100"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
          />
          {suggestionsListComponent}
          </Fragment>
          <button className="search__submit"><img src="../assets/search-icon.png" className="search__submit--icon" alt="search icon"/></button>
        </form>
        <ul id="artist-results"></ul>
      </div>
    )
  }
}

export default Search;