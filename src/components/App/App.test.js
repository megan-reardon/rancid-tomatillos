import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from '../../reducers';

describe('App Tests', () => {
  it('Can render the app and display each component', async () => {
    const store = createStore(rootReducer);

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

});
