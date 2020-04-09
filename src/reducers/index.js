import { combineReducers } from 'redux';
import { movies } from './movies';
import { userInfo } from './userInfo';

const rootReducer = combineReducers({
  movies,
  userInfo
})

export default rootReducer;
