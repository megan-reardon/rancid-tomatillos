import React from 'react';
import MovieCard from './MovieCard.js';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers';
import '@testing-library/jest-dom';

describe('MovieCard', () => {
  it('should render the correct movie information on each movie card', () => {
    const testStore = createStore(rootReducer);
      const testWrapper = <Provider store={testStore}>
      <Router>
      <MovieCard
        id={5}
        title={"Spiderman"}
        averageRating={3}
        backdrop={"https://image.tmdb.org/t/p/original//ocUrMYbdjknu2TwzMHKT9PBBQRw.jpg"}
        userRating={6}
      />
      </Router>
    </Provider>;

    const { getByText, getByAltText } = render(testWrapper)

    const titleEl = getByText("Spiderman");
    const ratingEl = getByText("Average Rating: 3.0/10");
    const altText = getByAltText("image for Spiderman");

    expect(titleEl).toBeInTheDocument();
    expect(ratingEl).toBeInTheDocument();
    expect(altText).toBeInTheDocument();
  });
});
