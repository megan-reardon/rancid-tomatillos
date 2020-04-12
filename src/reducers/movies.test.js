import { movies } from './movies';

describe('Movies Reducers Test', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = movies(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return movies if type is GET_MOVIES', () => {
    const initialState = [];
    const expected = [{id:1, movie_title: 'First Movie'}, {id: 2, movie_title: 'Second Movie'}];
    const action = {
      type: 'GET_MOVIES',
      movies: [{id:1, movie_title: 'First Movie'}, {id: 2, movie_title: 'Second Movie'}]
    }
    const result = movies(initialState, action);

    expect(result).toEqual(expected);
  });
})
