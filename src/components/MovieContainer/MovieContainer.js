import React, { Component } from 'react';
import MovieCard from "../MovieCard/MovieCard"
import { connect } from 'react-redux';
import { getRatings } from '../../actions';
import PropTypes from 'prop-types';

class MovieContainer extends Component {
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
          userInfo = {this.props.userInfo}
        />)
    })
  }

  render() {
    return (
      <section className="movie-container" data-testid="movie-container">
        {this.createMovieList()}
      </section>
    )
  }
}

MovieContainer.propTypes = {
  userInfo: PropTypes.object,
  logout: PropTypes.func,
  fetchUserRatings: PropTypes.func,
  movies: PropTypes.array,
  userRatings: PropTypes.array
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
