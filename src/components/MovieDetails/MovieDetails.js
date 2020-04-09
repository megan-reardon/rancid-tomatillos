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
      <article className="movie-details-card" style={{ backgroundImage: `url(${backdrop_path})`}}>
        <section className="img-poster">
          <img src={poster_path} alt={"image for " + title}/>
        </section>
        <section className="movie-details">
          <h1>{title}</h1>
          <h3>Average rating: {average_rating}</h3>
          <h3>Release date: {release_date}</h3>
          <p>{overview}</p>
        </section>
      </article>
    )
  }
}

export default MovieDetails;
