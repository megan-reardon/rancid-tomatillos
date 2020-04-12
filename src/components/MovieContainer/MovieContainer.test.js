import React from 'react';
import MovieContainer from './MovieContainer.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers/index';

describe('MovieContainer', () => {
  let testStore;
  let testWrapper;

  it('Should render on the dashboard', () => {
    testStore = createStore(rootReducer);
    testWrapper = <Provider store={testStore}><MovieContainer /></Provider>;
    const { getByTestId } = render(testWrapper);
    const container = getByTestId("movie-container")
    expect(container).toBeInTheDocument();
  })

})
