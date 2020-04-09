import React, { Component } from 'react';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      userRating: 0
    }
  }

  render() {
    const { id, title, backdrop_path, poster_path, release_date, overview, average_rating } = this.props
    return (
      <article className="movie-details-card">
        <h1>{title}</h1>
        <h3>{average_rating}</h3>
        <h3>{release_date}</h3>
        <p>{overview}</p>
        <img className="img-background" src={backdrop_path} alt={"image for " + title}/>
        <img className="img-poster" src={poster_path} alt={"image for " + title}/>
      </article>
    )
  }
}

export default MovieDetails;
