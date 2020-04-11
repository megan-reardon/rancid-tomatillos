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
    this.fetchRatings(this.props.userInfo.id)
  }

  checkIfLoggedIn = (e) => {
    e.preventDefault();
    const { rateMovie } = this.props;
    //go into userInfo in store
    //check if user is logged in
    // if yes - submitRating(rating)
    this.postNewRating({ movie_id: this.props.id , rating: this.state.userRating })
      .then(response => response.json())
      .then(data => {
        rateMovie(data);
        this.fetchRatings(this.props.userInfo.id);
      })
      //could replace lines 24-25 with fetch and update store

    // if no - display error
  }

  // toggleDisable = () => {
  //   //if userRatings in store has a rating with movieId that matches current movieId, then disable button
  //   //else return false
  //     return status;
  // }

  updateRating = (e) => {
    this.setState({userRating: parseInt(e.target.value)})
  }

  fetchRatings = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/3/ratings`)
    // fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${userId}/ratings`)
      .then(response => response.json())
      .then(data => this.props.fetchUserRatings(data.ratings))
  }
  //this needs to move! have fetch happen after login on initial render and update store with allRatings

  postNewRating = (rating) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/3/ratings`,
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

  showUserRating = () => {
   let matchingMovie = this.props.userRatings.find(rating => rating.movie_id === this.props.id);
   if(matchingMovie) {
     return matchingMovie.rating
   } else {
     return "You haven't rated this movie yet!"
   }
  }

  render() {
    const { id, title, backdrop_path, poster_path, release_date, overview, average_rating } = this.props;
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
            <h3>Your rating: {this.showUserRating()}</h3>
          </section>
          <section>
            <h3>Release date: {release_date}</h3>
          </section>
          <section>
            {overview}
          </section>
          <form className="submit-rating-form">
            <input value={this.state.userRating} onChange={this.updateRating} type="number" step="1" min="1" max="10" placeholder="Enter rating (1-10)" required/>
            <button className="submit-rating" type="submit" onClick={this.checkIfLoggedIn} >SUBMIT</button>
          </form>
        </section>
      </article>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  rateMovie: rating => dispatch( submitRating(rating) ),
  fetchUserRatings: allRatings => dispatch( getRatings(allRatings) )
})

const mapStateToProps = (state) => ({
  movies: state.movies,
  movieRatings: state.movieRatings,
  userRatings: state.userRatings,
  userInfo: state.userInfo
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
