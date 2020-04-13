import React from 'react';
import { render, fireEvent, waitForElement, cleanup } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from '../../reducers';

// import { apiFetchMovies, apiFetchRatings } from '../../apiCalls/apiCalls';
// jest.mock('../../apiCalls/apiCalls.js');

describe('App Tests', () => {
  // let fetchedMovies;
  let utils;
  let store;

  beforeEach(() => {
    // fetchedMovies = [
    //   {
    //     "id": 1,
    //     "title": "Bloodshot",
    //     "poster_path": "https://image.tmdb.org/t/p/original//8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg",
    //     "backdrop_path": "https://image.tmdb.org/t/p/original//ocUrMYbdjknu2TwzMHKT9PBBQRw.jpg",
    //     "release_date": "2020-03-05",
    //     "overview": "After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine—'Bloodshot'. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought.",
    //     "average_rating": 6
    //   }
    // ];
    store = createStore(rootReducer);
    utils = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

  });

  afterEach(() => {
    cleanup
  });

  it('Can render the app and display each component', async () => {
    // apiFetchMovies.mockResolvedValue(fetchedMovies);

    const { getByText, debug } = utils;

    expect(getByText('Login')).toBeInTheDocument();
    await waitForElement(() => getByText('Bloodshot'))
    expect(getByText('Bloodshot')).toBeInTheDocument();
  });

  it('should display error if login credentials are invalid other wise logs in successfully', async () => {
    const { getByText, getByPlaceholderText, debug } = utils

    fireEvent.click(getByText('Login'));

    const emailInput = getByPlaceholderText('Enter email');
    const passwordInput = getByPlaceholderText('Enter password');
    const loginButton = getByText('Login!');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();

    fireEvent.change(emailInput, {target: {value:'lucy@turing.ioo'}});
    fireEvent.change(passwordInput, {target: {value: 'password1'}})
    fireEvent.click(loginButton)

    await waitForElement(() => getByText('Username or password is incorrect'));

    const errorMessage = getByText('Username or password is incorrect');
    expect(errorMessage).toBeInTheDocument();

    fireEvent.change(emailInput, {target: {value:'lucy@turing.io'}});
    fireEvent.click(loginButton);

    await waitForElement(() => getByText('Welcome, Lucy!'))
    await waitForElement(() => getByText('Bloodshot'))

    expect(getByText('Welcome, Lucy!')).toBeInTheDocument();
    expect(getByText('Bloodshot')).toBeInTheDocument();
  });

  it('should be able to change views to movie details page', async () => {
    const { getByText, getByPlaceholderText, getByTestId, debug } = utils
    await waitForElement(() => getByTestId('movie-1'))

    fireEvent.click(getByTestId('movie-1'))
    const movie1Text = 'After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine—\'Bloodshot\'. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there\'s more to the conspiracy than he thought.';

    await waitForElement(() => getByText(movie1Text));

    expect(getByText(movie1Text)).toBeInTheDocument();
  })

});
