import React from "react"
import MovieCard from "../MovieCard/MovieCard"

const MovieContainer = ({ movies }) => {
  const movieList = movies.map(movie => {
    return (
      <MovieCard
        id={movie.id}
        title={movie.title}
        backdrop={movie.backdrop_path}
        averageRating={movie.average_rating}
      />)
  })

  return (
    <section className="movie-container">
      {movieList}
    </section>
  )
}

export default MovieContainer;
