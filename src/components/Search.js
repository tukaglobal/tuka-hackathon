import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };

  state = {
    query: '',
    genres: []
  }

  componentDidMount() {
    this.getGenres()
    this.getTracks()
  }

  
  static defaultProps = {
    suggestions: []
  };

  constructor(props) {
    super(props);

    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
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
      console.log(genresJSON.tracks[2], 'genresJSON')
      this.setState({query: genresJSON}, () => {
        console.log(this.state.query)
      })
      
    } catch (error) {
      console.log(error, "error in catch")
    }
  } 

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

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

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
          <ul class="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
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
          <div class="no-suggestions">
            <em>No suggestions, try a genre!</em>
          </div>
        );
      }
    }

    return (
        <div className="search-container">      
        <Fragment>
        <input
          type="text"
          className="search-container__input"
          placeholder='Enter keyword, genre, or subgenre...'
          maxLength="100"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />
        {suggestionsListComponent}
      </Fragment>
          <button className="search-container__submit"><img src="../assets/search-icon.png" className="search-container__submit--icon" alt="search icon"/></button>
              <ul id="artist-results"></ul>
      </div>
    );
  }
}

export default Search;