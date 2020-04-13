import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  constructor() {
    super();
  }

  render() {
    const { id, title, backdrop, averageRating, userRating, userInfo } = this.props;
    let userRatingH2;

    if(userInfo.id && this.props.userRating > 0){
      let roundedRating = parseInt(userRating).toFixed(1)
      userRatingH2 = `Your rating: ${roundedRating}/10`
    } else if(userInfo.id){
      userRatingH2 = "You haven't rated this movie yet!"
    }

    return (
      <article className="movie-card">
        <Link to={`/movies/${id}`}>
          <img src={backdrop} alt={"image for " + title}/>
          <div className="movie-info-container">
          <h1>{title}</h1>
          <h2>Average Rating: {averageRating.toFixed(1)}/10</h2>
          <h2>{userRatingH2}</h2>
        </div>
        </Link>
      </article>
    )
  }
}

MovieCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  backdrop: PropTypes.string,
  averageRating: PropTypes.number,
  userRating: PropTypes.string,
  userInfo: PropTypes.object
}

const mapStateToProps = (state) => ({
  userInfo: state.userInfo
})

export default connect(mapStateToProps, null)(MovieCard);
