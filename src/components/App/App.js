import React, { Component } from 'react';
// import Nav from "../Nav/Nav"
import MovieContainer from "../MovieContainer/MovieContainer"

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount = () => {
    return fetch("https://rancid-tomatillos.herokuapp.com/api/v1/movies")
    .then(response => response.json())
    .then(data => this.setState({ movies: data.movies }))
    .catch(err => console.log(err.message))
  }

  render() {
    return (
      <main>
      <h1>Nav</h1>
      <MovieContainer
        movies={this.state.movies}
      />
      </main>
    )
  }
}

export default App;
