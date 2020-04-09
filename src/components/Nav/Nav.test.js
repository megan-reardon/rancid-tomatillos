import React from 'react';
import ReactDOM from 'react-dom';
import { render, getByText, fireEvent } from '@testing-library/react';
import Nav from './Nav';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';

describe("Nav", () => {
  it('should render the logo', () => {
    const { getByAltText, getByText } = render (
      <Router>
        <Nav
          userInfo={{
            id: null
          }}
        />
      </Router>)

      const logoEl = getByAltText("Rancid Tomatillos Logo");
      const loginEl = getByText("Login");
      expect(logoEl).toBeInTheDocument();
      expect(loginEl).toBeInTheDocument();

  })
})
