import React from 'react';
import Login from './Login.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Login', () => {
  let mockRender;

  beforeEach(() => {
    const testStore = createStore(rootReducer);
    const checkUserData = jest.fn()
    mockRender = render(
      <Provider store={testStore}>
        <Router>
          <Login
            checkUserData={checkUserData}
          />
        </Router>
      </Provider>
    )
  });

  afterEach(() => {
    cleanup
  });

  it('should render the correct label on Login', () => {
    const { getByText, getByTestId } = mockRender;

    const loginTitleElement = getByTestId("login-header")
    const emailTitleElement = getByText("Email")
    const passwordTitleElement = getByText("Password")
    const submitButtonElement = getByTestId("login-btn")

    expect(loginTitleElement).toBeInTheDocument();
    expect(emailTitleElement).toBeInTheDocument();
    expect(passwordTitleElement).toBeInTheDocument();
    expect(submitButtonElement).toBeInTheDocument();
  })

  it("should have value in enter inputs", () => {
    const { getByPlaceholderText } = mockRender;

    const emailInputElement = getByPlaceholderText("Enter email");
    const passwordInputElement = getByPlaceholderText("Enter password");

    fireEvent.change(emailInputElement, {target: {value: "Yoo@email.com"}});
    fireEvent.change(passwordInputElement, {target: {value: "password1"}});

    expect(emailInputElement.value).toBe("Yoo@email.com");
    expect(passwordInputElement.value).toBe("password1");
  });

  it('should call the login function when the Login button is clicked', () => {

    const { getByTestId } = mockRender;

    const loginButton = getByTestId('login-btn')

    fireEvent.click(loginButton);

    expect(checkUserData).toHaveBeenCalledTimes(1)
  })

})
