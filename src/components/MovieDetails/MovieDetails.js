import React, { Component } from 'react';
import { submitRating, getRatings } from '../../actions';
import { connect } from 'react-redux';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      userRating: null
    }
  }

  componentDidMount = () => {
    this.fetchRatings()
  }

  checkIfLoggedIn = (e) => {
    e.preventDefault();
    const { rateMovie } = this.props;
    //go into userInfo in store
    //check if user is logged in
    // if yes - submitRating(rating)
    this.postNewRating({ movie_id: this.props.id , rating: this.state.userRating })
      .then(response => response.json())
      .then(data => rateMovie(data))

    // if no - display error
  }

  updateRating = (e) => {
    this.setState({userRating: parseInt(e.target.value)})
  }

  fetchRatings = () => {
    //gets all ratings for this user in the API and update movieRatings
    fetch('https://rancid-tomatillos.herokuapp.com/api/v1/users/3/ratings')
      .then(response => response.json())
      .then(data => console.log(data))
      // .then(data => this.props.fetchUserRatings(data.ratings))
  }

  postNewRating = (rating) => {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v1/users/3/ratings',
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(
          rating
        ),
      }
    );
  }

  render() {
    const { id, title, backdrop_path, poster_path, release_date, overview, average_rating } = this.props;
    return (
      <article className="movie-details-card">
        <h1>{title}</h1>
        <h3>Average rating: {average_rating}</h3>
        <h3>Release date: {release_date}</h3>
        <p>{overview}</p>
        <img className="img-background" src={backdrop_path} alt={"image for " + title}/>
        <img className="img-poster" src={poster_path} alt={"image for " + title}/>
        <form className="submit-rating-form">
          <input value={this.state.userRating} onChange={this.updateRating} type="number" step="1" min="1" max="10" placeholder="Enter rating (1-10)" required/>
          <button className="submit-rating" type="submit" onClick={this.checkIfLoggedIn}>SUBMIT</button>
        </form>
      </article>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  rateMovie: rating => dispatch( submitRating(rating) ),
  fetchUserRatings: allRatings => dispatch( getRatings(allRatings) )
})

const mapStateToProps = (state) => ({
  movieRatings: state.movieRatings
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
