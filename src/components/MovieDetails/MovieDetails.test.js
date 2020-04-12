import React from 'react';
import MovieDetails from './MovieDetails.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers/index';

describe('MovieDetails', () => {
  let testStore;
  let testWrapper;
  let selectedMovie;

  beforeEach(() => {
    testStore = createStore(rootReducer);
    selectedMovie = {id: 1,
      title: "Bloodshot",
      poster_path: "https://image.tmdb.org/t/p/original//8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//ocUrMYbdjknu2TwzMHKT9PBBQRw.jpg",
      release_date: "2020-03-05",
      overview: "After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine—'Bloodshot'. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought.",
      average_rating: 5.75};
      testWrapper = <Provider store={testStore}><MovieDetails {...selectedMovie}/></Provider>;
  })

  it('Should render with the title and description of the selected movie', () => {
    const { getByText } = render(testWrapper);
    const movieTitle = getByText("Bloodshot")
    const movieDescription = getByText("After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine—'Bloodshot'. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought.")
    expect(movieTitle).toBeInTheDocument();
    expect(movieDescription).toBeInTheDocument();
  })

  it('Should render with the matching movie poster', () => {
    const { getByAltText } = render(testWrapper);
    const moviePosterImage = getByAltText("poster for Bloodshot");
    expect(moviePosterImage).toBeInTheDocument();
  })

  it('Should render with the matching movie background', () => {
    const { getByAltText } = render(testWrapper);
    const movieBackgroundImage = getByAltText("background for Bloodshot");
    expect(movieBackgroundImage).toBeInTheDocument();
  })

  it('Should render with the movie release date', () => {
    const { getByText } = render(testWrapper);
    const releaseDate = getByText("Release date: 2020-03-05");
    expect(releaseDate).toBeInTheDocument();
  })

  it('Should render with the average user rating', () => {
    const { getByText } = render(testWrapper);
    const averageRating = getByText("Average rating: 5.8/10");
    expect(averageRating).toBeInTheDocument();
  })
})
