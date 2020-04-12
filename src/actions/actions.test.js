import * as actions from '.';

describe('Actions Tests', () => {

  it('should have a type of GET_MOVIES, and correct payload', () => {
    const movie1 = {id: 1, title: 'First Movie'};
    const movie2 = {id: 2, title: 'Second Movie'};

    const expectedAction = {
      type: 'GET_MOVIES',
      movies: [movie1, movie2]
    }
    const result = actions.getMovies([movie1, movie2]);

    expect(result).toEqual(expectedAction);
  });

  it('should have type of LOGIN and correct payload', () => {
    const userInfo = {
      id: 1,
      name: 'Lucy',
      email: 'lucy@turing.io'
    }
  })

});
