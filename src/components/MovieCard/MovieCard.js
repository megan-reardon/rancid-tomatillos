import React from "react";
import { Link } from 'react-router-dom';

const MovieCard = ({ id, title, backdrop, averageRating }) => {

  return (
    <article className="movie-card">
      <Link to={`/movies/${id}`}>
        <img src={backdrop} alt={"image for " + title}/>
        <div className="movie-info-container">
        <h1>{title}</h1>
        <h2>Average Rating: {averageRating}</h2>
      </div>
      </Link>
    </article>
  )
}

export default MovieCard;
