import { userRatings } from './userRatings';

describe('UserRatings Reducers Test', () => {
  it('should return initial state', () => {
    const expected = [];
    const result = userRatings(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should be able to get users ratings', () => {
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
    const expected = [rating1, rating2];

    const ratingsAction = {
      type: 'GET_RATINGS',
      allRatings: expected
    }
    const result = userRatings([], ratingsAction);
    expect(result).toEqual(expected);
  });
});
