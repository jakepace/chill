import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './MovieList';
import SearchBar from './Searchbar';
import api from '../utils/api';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: []
    };
  }

  // TODO: Change to handle clicking on search result
  // Fire API request with search result's imdbID
  fetchTitle(event) {
    event.preventDefault();
    return api.movieSearch(this.state.query)
      .then( response => {
        this.setState({results: response.Search});
        console.log(this.state);
      }); 
  }

  render() {
    return (
      <div>
      <h1>Chill</h1>
        <SearchBar />
        <MovieList results={this.state.titles} />
      </div>
    );
  }
};

module.exports = App;