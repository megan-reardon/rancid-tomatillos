import React from 'react';
import MovieContainer from './MovieContainer.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import {createStore } from 'redux';
import { rootReducer } from '../../reducers/index';

describe('MovieContainer', () => {
  it('Should render on the dashboard', () => {
    const testStore = createStore(rootReducer);
    const testWrapper = <Provider store={testStore}><MovieContainer /></Provider>;

    const { getByTestId } = render(testWrapper);

    const container = getByTestId("movie-container")

    expect(container).toBeInTheDocument();
  })

  // it("should have value in enter inputs", () => {
  //   const { getByPlaceholderText } = mockRender;
  //
  //   const emailInputElement = getByPlaceholderText("enter email");
  //   const passwordInputElement = getByPlaceholderText("enter password");
  //
  //   fireEvent.change(emailInputElement, {target: {value: "Yoo@email.com"}});
  //   fireEvent.change(passwordInputElement, {target: {value: "password1"}});
  //
  //   expect(emailInputElement.value).toBe("Yoo@email.com");
  //   expect(passwordInputElement.value).toBe("password1");
  // })

})
