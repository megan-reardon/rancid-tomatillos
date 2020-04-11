import React, { Component } from 'react';
import MovieCard from "../MovieCard/MovieCard"
import { connect } from 'react-redux';

class MovieContainer extends Component {
  constructor() {
    super();
  }

  createMovieList = () =>{
    // console.log(this.props.movies)
    console.log(this.props)
    this.props.movies.map(movie => {
      return (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          backdrop={movie.backdrop_path}
          averageRating={movie.average_rating}
        />)
    })
  }

  render() {
  return (
    <section className="movie-container">
      {this.createMovieList}
    </section>
  )}
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  userRatings: state.userRatings,
  userInfo: state.userInfo
})

export default connect(mapStateToProps, null)(MovieContainer);
