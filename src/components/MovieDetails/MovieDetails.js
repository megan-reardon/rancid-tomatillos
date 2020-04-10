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
      <article className="movie-details-card" >
        <section className="movie-images">
          <img src={poster_path} alt={"image for " + title}/>
          <img src={backdrop_path} alt={"image for " + title}/>
        </section>
        <section className="movie-details">
          <section>
            <h1>{title}</h1>
            <h3>Average rating: {average_rating}</h3>
          </section>
          <section>
            <h3>Release date: {release_date}</h3>
          </section>
          <section>
            {overview}
          </section>
        </section>
      </article>
    )
  }
}

export default MovieDetails;
