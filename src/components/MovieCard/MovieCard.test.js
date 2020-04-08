import React from 'react';
import MovieCard from './MovieCard.js';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('MovieCard', () => {

  let mockRender;

  beforeEach(() => {
    mockRender = render(
      <Router><MovieCard
        movieInfo={{
          title: "Spiderman",
          average_rating: 3
        }}
      />
      </Router>)
  })

  // afterEach(() => {
  //   cleanup()
  // })

  it('should render the correct movie information on each movie card', () => {
    const { getByText, getByAltText } = mockRender;
    const titleEl = getByText("Spiderman");
    const ratingEl = getByText("Average Rating: 3");
    const altText = getByAltText("image for Spiderman")
    expect(titleEl).toBeInTheDocument();
    expect(ratingEl).toBeInTheDocument();
    expect(altText).toBeInTheDocument();
  });

})
