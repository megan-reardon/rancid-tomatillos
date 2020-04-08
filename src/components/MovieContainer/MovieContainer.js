import React from "react"
import MovieCard from "../MovieCard/MovieCard"

const MovieContainer = ({ movies }) => {
  const movieList = movies.map(movie => {
    return (
      <MovieCard
        movieInfo={movie}
      />)
  })

  return (
    <section className="movie-container">
      {movieList}
    </section>
  )
}

export default MovieContainer;
