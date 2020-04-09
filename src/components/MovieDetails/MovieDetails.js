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
      <article>
        <h1>{title}</h1>
      </article>
    )
  }
}

export default MovieDetails;
