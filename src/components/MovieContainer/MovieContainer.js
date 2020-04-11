import React, { Component } from 'react';
import MovieCard from "../MovieCard/MovieCard"

class MovieContainer extends Component {
  constructor() {
    super();
  }

  createMovieList = () =>{
    return movies.map(movie => {
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
      {createMovieList}
    </section>
  )}
}

export default MovieContainer;
