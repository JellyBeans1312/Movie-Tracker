import React, { Component } from 'react';
import './App.css';
import { showMovies } from './actions'
import { connect } from 'react-redux';
import NavBar from './components/NavBar/NavBar';
import { fetchMovies } from './api/apiCalls';

export class App extends Component {
  async componentDidMount() { 
    await fetchMovies()
      .then(movies => this.props.showMovies(movies))
  }

  render() {
    return (
      <div className="App">
        <NavBar movies={this.props.movies} user={this.props.login}/>
      </div>
    );
  }
}

  const mapStateToProps = (state) => ({
    movies: state.movies,
    login: state.login
  })

  const mapDispatchToProps = (dispatch) => ({
    showMovies: (movies) => dispatch (showMovies(movies))
  })

export default connect(mapStateToProps, mapDispatchToProps)(App);
