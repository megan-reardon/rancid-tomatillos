import React, { Component } from 'react';
import { getRatings } from '../../actions';
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
    this.postNewRating({ movie_id: this.props.id , rating: this.state.userRating }, this.props.userInfo.id)
      .then(response => response.json())
      .then(() => this.fetchRatings(this.props.userInfo.id))
  }

  updateRating = (e) => {
    this.setState({userRating: parseInt(e.target.value)})
  }

  fetchRatings = (userId) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${userId}/ratings`)
      .then(response => response.json())
      .then(data => this.props.fetchUserRatings(data.ratings))
  }

  postNewRating = (rating, userId) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${userId}/ratings`,
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
  fetchUserRatings: allRatings => dispatch( getRatings(allRatings) )
})

const mapStateToProps = (state) => ({
  movies: state.movies,
  userRatings: state.userRatings,
  userInfo: state.userInfo
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
