export const getMovies = (movies)  => ({
  type: 'GET_MOVIES',
  movies
})

export const login = (userInfo) => ({
  type: 'LOGIN',
  userInfo
})
