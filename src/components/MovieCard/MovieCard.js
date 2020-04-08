import React from "react"

const MovieCard = (props) => {
  return (
    <article className="movie-card">
      <img src={props.movieInfo.backdrop_path} alt={"image for " + props.movieInfo.title}/>
      <h1>{props.movieInfo.title}</h1>
      <h2>Average Rating: {props.movieInfo.average_rating}</h2>
    </article>
  )
}

export default MovieCard;
