import { combineReducers } from 'redux';
import { movies } from './movies';
import { userInfo } from './userInfo';
import { userRatings } from './userRatings';

const rootReducer = combineReducers({
  movies,
  userInfo,
  userRatings
})

export default rootReducer;
