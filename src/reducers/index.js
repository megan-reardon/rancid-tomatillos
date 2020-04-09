import { combineReducers } from 'redux';
import { movies } from './movies';
import { userInfo } from './userInfo';
import { movieRatings } from './movieRatings';

const rootReducer = combineReducers({
  movies,
  userInfo,
  movieRatings
})

export default rootReducer;
