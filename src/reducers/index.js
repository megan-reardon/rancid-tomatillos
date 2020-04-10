import { combineReducers } from 'redux';
import { movies } from './movies';
import { userInfo } from './userInfo';
import { movieRatings } from './movieRatings';
import { userRatings } from './userRatings';

const rootReducer = combineReducers({
  movies,
  userInfo,
  movieRatings,
  userRatings
})

export default rootReducer;
