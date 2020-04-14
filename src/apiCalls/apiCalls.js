const BASE_URL = 'https://rancid-tomatillos.herokuapp.com/api/v1';
const MOVIES_ENDPOINT = '/movies/';
const LOGIN_ENDPOINT = '/login/';
const USERS = '/users/';
const RATINGS_ENDPOINT = '/ratings/';

export const apiFetchMovies = async () => {
  return await fetch(BASE_URL + MOVIES_ENDPOINT)
    .then(response => response.json())
      // .catch(err => console.log(err.message))
}

export const apiFetchUserData = async (email, password) => {
  return await fetch(BASE_URL + LOGIN_ENDPOINT,
    {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(
          {email: email, password: password}
      ),
    }
  );
}

export const apiFetchRatings = async (userId) => {
  return await fetch(BASE_URL + USERS + `${userId}` + RATINGS_ENDPOINT)
    .then(response => response.json())
}

export const apiPostNewRating = async (rating, userId) => {
  return await fetch(BASE_URL + USERS + `${userId}` + RATINGS_ENDPOINT,
    {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(
        rating
      ),
    }
  );
}
