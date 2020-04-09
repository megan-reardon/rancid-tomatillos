import React from "react"

const MovieCard = (props) => {
  return (
    <article className="movie-card">
      <img src={props.movieInfo.backdrop_path} alt={"image for " + props.movieInfo.title}/>
      <div className="movie-info-container">
        <h1>{props.movieInfo.title}</h1>
        <h2>Average Rating: {props.movieInfo.average_rating}</h2>
      </div>
    </article>
  )
}

export default MovieCard;
