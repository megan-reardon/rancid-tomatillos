import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from '../../reducers';

describe('App Tests', () => {
  let store;

  beforeEach(() => {
    store = createStore(rootReducer);
  })
  it('Can render the app and display each component', async () => {
    const { getByText, debug } = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    )

    expect(getByText('Login')).toBeInTheDocument();
    await waitForElement(() => getByText('Bloodshot'))
    expect(getByText('Bloodshot')).toBeInTheDocument();
  });

  it('should display error if login credentials are invalid', async () => {
    const { getByText, getByPlaceholderText, debug } = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    )

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
  });

});
