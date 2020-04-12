import React from 'react';
import Login from './Login.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Login', () => {
  let mockRender;

  beforeEach(() => {
    const testStore = createStore(rootReducer);
    mockRender = render(
      <Provider store={testStore}>
        <Router>
          <Login />
        </Router>
      </Provider>
    )
  })

  it('should render the correct label on Login', () => {
    const { getByText } = mockRender;

    const loginTitleElement = getByText("Login")
    const emailTitleElement = getByText("Email")
    const passwordTitleElement = getByText("Password")
    const submitTitleElement = getByText("Submit Login")

    expect(loginTitleElement).toBeInTheDocument();
    expect(emailTitleElement).toBeInTheDocument();
    expect(passwordTitleElement).toBeInTheDocument();
    expect(submitTitleElement).toBeInTheDocument();
  })

  it("should have value in enter inputs", () => {
    const { getByPlaceholderText } = mockRender;

    const emailInputElement = getByPlaceholderText("enter email");
    const passwordInputElement = getByPlaceholderText("enter password");

    fireEvent.change(emailInputElement, {target: {value: "Yoo@email.com"}});
    fireEvent.change(passwordInputElement, {target: {value: "password1"}});

    expect(emailInputElement.value).toBe("Yoo@email.com");
    expect(passwordInputElement.value).toBe("password1");
  })

  //* test can be used in future when displaying bad credentials if worng login is used *//
  // it("should give error when entering wrong credentials", () => {
  //   const { getByText, getByPlaceholderText } = mockRender;
  //
  //   const emailInputElement = getByPlaceholderText("enter email");
  //   const passwordInputElement = getByPlaceholderText("enter password");
  //
  //   fireEvent.change(emailInputElement, {target: {value: "Yoo@email.com"}});
  //   fireEvent.change(passwordInputElement, {target: {value: "password1"}});
  //   fireEvent.click(getByText("Submit Login"));
  // })

})
