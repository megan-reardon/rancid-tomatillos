import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class MovieCard extends Component {
  constructor() {
    super();
  }

  render() {
    const { id, title, backdrop, averageRating, userRating, userInfo } = this.props;
    let userRatingH2;

    if(userInfo.id){
      userRatingH2 = `Your rating: ${userRating}/10`
    }

    return (
      <article className="movie-card">
        <Link to={`/movies/${id}`}>
          <img src={backdrop} alt={"image for " + title}/>
          <div className="movie-info-container">
          <h1>{title}</h1>
          <h2>Average Rating: {averageRating}/10</h2>
          <h2>{userRatingH2}</h2>
        </div>
        </Link>
      </article>
    )
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.userInfo
})

export default connect(mapStateToProps, null)(MovieCard);
