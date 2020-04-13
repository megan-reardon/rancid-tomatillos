import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../actions';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Login from '../Login/Login';
import MovieContainer from "../MovieContainer/MovieContainer";
import MovieDetails from '../MovieDetails/MovieDetails';

import { apiFetchMovies } from '../../apiCalls/apiCalls';

class App extends Component {

  componentDidMount = () => {
    apiFetchMovies()
      .then(data => this.props.fetchMovies(data.movies))
      .catch(err => console.log(err.message))
  }

  render() {
    return (
      <main>
      <Nav />
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <MovieContainer/>
        )}
      />
      <Route
        path="/login"
        render={() => (
          <Login userInfo={this.props.userInfo}/>
        )}
      />
      <Route
        path="/movies/:id/" exact
        render={({ match }) => {
          const selectedMovie = this.props.movies.find(movie => parseInt(match.params.id) === movie.id)
          return <MovieDetails
                  {...selectedMovie}
                 />
        }}
      />
      <Route
        component={MovieContainer}
      />
      </Switch>
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  userInfo: state.userInfo
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: movies => dispatch( getMovies(movies) )
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
