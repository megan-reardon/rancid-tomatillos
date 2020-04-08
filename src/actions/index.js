export const fetchMovies = () => ({
  type: 'FETCH_MOVIES',
  movies:
  fetch('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
    .then(response => response.json())
    .then(data => data.movies)
    .catch(err => console.log(err.message))
});
