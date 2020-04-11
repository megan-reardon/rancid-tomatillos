import React, { Component } from 'react';
import MovieCard from "../MovieCard/MovieCard"
import { connect } from 'react-redux';
import { getRatings } from '../../actions';

class MovieContainer extends Component {
  componentDidMount = () => {
    this.fetchRatings()
  }

  fetchRatings = () => {
    // will need to make it dynamic based on user login
    // fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${userId}/ratings`)
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/3/ratings`)
      .then(response => response.json())
      .then(data => this.props.fetchUserRatings(data.ratings))
  }

  updateUserMovieList = () => {
    return this.props.movies.map(movie => {
      return {...movie, userRating: this.checkUserRating(movie.id)}
    })
  }

  checkUserRating = (id) => {
    const ratingCheck = this.props.userRatings.find(rating => rating.movie_id === id);
    if(ratingCheck) {
      return ratingCheck.rating
    } else {
      return "Not Rated Yet"
    }
  }

  createMovieList = () =>{
    return this.updateUserMovieList().map(movie => {
      return (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          backdrop={movie.backdrop_path}
          averageRating={movie.average_rating}
          userRating={movie.userRating}
        />)
    })
  }

  render() {
    return (
      <section className="movie-container">
        {this.createMovieList()}
      </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
