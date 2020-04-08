import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions';

import MovieContainer from "../MovieContainer/MovieContainer"

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     movies: []
  //   }
  // }

  componentDidMount = () => {
    this.props.fetchMovies();
  }

  render() {
    console.log(this.props);
    return (
      <main>
      <h1>Nav</h1>
      <MovieContainer
        movies={this.props.movies}
      />
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch( fetchMovies() )
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
