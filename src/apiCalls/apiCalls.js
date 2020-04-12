const BASE_URL = 'https://rancid-tomatillos.herokuapp.com/api/v1';
const MOVIES_ENDPOINT = '/movies/';
const LOGIN_ENDPOINT = '/login/';

export const apiFetchMovies = async () => {
  return await fetch(BASE_URL + MOVIES_ENDPOINT)
    .then(response => response.json())
      .catch(err => console.log(err.message))
}
