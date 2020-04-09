import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../actions';
import { Route } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Login from '../Login/Login';
import MovieContainer from "../MovieContainer/MovieContainer";
import MovieDetails from '../MovieDetails/MovieDetails';

class App extends Component {

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
      .then(response => response.json())
      .then(data => this.props.fetchMovies(data.movies))
      .catch(err => console.log(err.message))
  }

  render() {
    return (
      <main>
      <Nav
        userInfo={this.props.userInfo}
      />
      <Route
        exact
        path="/"
        render={() => (
          <MovieContainer
            movies={this.props.movies}
          />
        )}
      />
      <Route
        path="/login"
        render={() => (
          <Login/>
        )}
      />
      <Route
        path="/movies/:id/" exact
        render={({ match }) => {
          const selectedMovie = this.props.movies.find(movie => parseInt(match.params.id) === movie.id)
          return <MovieDetails
                  {...selectedMovie}
                 />
                 console.log(selectedMovie)
        }}
      />
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  userInfo: {
    id: '',
    name: 'Ya Boi',
    email: 'foo@yaa.com'
  }
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: movies => dispatch( getMovies(movies) )
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
