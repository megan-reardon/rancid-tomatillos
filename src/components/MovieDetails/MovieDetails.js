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
        <h3>Average rating: {average_rating}</h3>
        <h3>Release date: {release_date}</h3>
        <p>{overview}</p>
        <img className="img-background" src={backdrop_path} alt={"image for " + title}/>
        <img className="img-poster" src={poster_path} alt={"image for " + title}/>
        <form className="submit-rating-form">
          <input type="number" min="1" max="10" placeholder="Enter rating (1-10)" required/>
          <button className="submit-rating" type="submit">SUBMIT</button>
        </form>
      </article>
    )
  }
}

export default MovieDetails;
