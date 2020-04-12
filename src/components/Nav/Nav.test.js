import React from 'react';
import Nav from './Nav';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers/'
import '@testing-library/jest-dom';

describe("Nav", () => {
  it('should render the logo', () => {
    const testStore = createStore(rootReducer);
    const testWrapper = <Provider store={testStore}>
      <Router>
        <Nav/>
      </Router>
    </Provider>

    const { getByAltText, getByText } = render (testWrapper)

    const logoEl = getByAltText("Rancid Tomatillos Logo");
    const loginEl = getByText("Login");

    expect(logoEl).toBeInTheDocument();
    expect(loginEl).toBeInTheDocument();
  })
})
