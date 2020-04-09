export const getMovies = (movies)  => ({
  type: 'GET_MOVIES',
  movies
})

export const login = (userInfo) => ({
  type: 'LOGIN',
  userInfo
})

export const submitRating = (rating) => ({
  type: 'SUBMIT_RATING',
  rating
})
