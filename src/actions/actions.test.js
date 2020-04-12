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
    const expectedAction = {
      type: 'LOGIN',
      userInfo: {
        id: 3,
        name: 'lucy',
        email: 'lucy@turing.io'
      }
    };

    const result = actions.login({id: 3, name: 'lucy', email: 'lucy@turing.io'});

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of LOGOUT and a correct payload', () => {
    const expectedAction = {
      type: 'LOGOUT',
      id: 3
    }

    const result = actions.logout(3);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of GET_RATINGS and correct payload', () => {
    const rating1 = {
      "id": 119,
      "user_id": 3,
      "movie_id": 34,
      "rating": 2,
      "created_at": "2020-04-11T22:44:00.192Z",
      "updated_at": "2020-04-11T22:44:00.192Z"
    }
    const rating2 = {
      "id": 120,
      "user_id": 3,
      "movie_id": 1,
      "rating": 5,
      "created_at": "2020-04-11T23:02:41.726Z",
      "updated_at": "2020-04-11T23:02:41.726Z"
    }

    const expectedAction = {
      type: 'GET_RATINGS',
      allRatings: [rating1, rating2]
    }

    const result = actions.getRatings([rating1, rating2])

    expect(result).toEqual(expectedAction);
  });

});
