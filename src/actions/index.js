export const getMovies = (movies)  => ({
  type: 'GET_MOVIES',
  movies
})

export const login = (userInfo) => ({
  type: 'LOGIN',
  userInfo
})

export const getRatings = (allRatings) => ({
  type: 'GET_RATINGS',
  allRatings
})

export const logout = (id) => {
  console.log('logging out..');
  return ({
    type: 'LOGOUT',
    id
  })
}
