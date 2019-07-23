// import React from 'react';
import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import MovieContainter from '../MovieContainer/MovieContainer'
import MovieSpecs from '../MovieSpecs/MovieSpecs'
import AccountMenu from '../AccountMenu/AccountMenu'
import SignUpMenu  from '../SignUpMenu/SignUpMenu'
import { logOut, setFavorites } from '../../actions';
import { connect } from 'react-redux';
import './NavBar.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  logOutUser = () => {
    this.props.logOut();
    this.props.setFavorites([]);
  }

  render () {
  return (
    <div>
      <div className = 'header'>
        <h1 className='app-name'> <span className='bang'>!</span>Netflix</h1>
        {this.props.user !== null && <NavLink to='/favorites' className='nav-fav'>
          <button className='nav-btn'>Favorites</button>
        </NavLink>} 
        <NavLink to='/Login' className='nav-log-in'>
          <button className='nav-log-in-btn'>Login</button>
        </NavLink>
        <NavLink to='/signup' className='nav-sign-up'>
          <button className='nav-btn'>Sign Up</button>
        </NavLink>
      </div>
      <Route exact path='/' render={() => 
        <section>
          <MovieContainter movies={this.props.movies}/> 
        </section>
      }/>
      <Route exact path='/Login' render={() => 
        <section>
          <AccountMenu user={this.props.user}/>
          <MovieContainter movies={this.props.movies}/> 
        </section>
      }/>
      <Route exact path='/LoggedIn' render={() =>
        <section>
          <div className='logged-in-bar'>
            <h2 className='user-name'>{this.props.user.name && `Welcome ${this.props.user.name}!`}</h2>
          <Link to='/' onClick={() => this.logOutUser()}>
            <button className='sign-out-btn'>Sign Out</button>
          </Link>
          </div>
          <MovieContainter movies={this.props.movies}/> 
        </section> 
      }/>
      <Route exact path='/:id' render={({match}) => {
        const {id} = match.params;
        const description = this.props.movies.find(movie => {
          return movie.id === parseInt(id)
        });
        return description && <MovieSpecs {...description} />
      }}/>
      <Route exact path='/Favorites' render={() =>
        <section>
          <div className='logged-in-bar'>
            <h2 className='user-name'>{this.props.user.name && `Welcome ${this.props.user.name}!`}</h2>
          <Link to='/' onClick={() => this.logOutUser()}>
            <button className='sign-out-btn' onClick={this.logoutUser}>Sign Out</button>
          </Link>
          </div>
          <MovieContainter movies={this.props.userFavorites} />
        </section>
      }/>
      <Route exact path='/signup' render={() => 
        <section>
          <SignUpMenu user={this.props.user}/>
          <MovieContainter movies={this.props.movies}/> 
        </section>
      }/>
    </div>
    )
  }
}

export const mapStateToProps = store => ({
  userFavorites: store.userFavorites
})

export const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logOut())
});

NavBar.propTypes = {
  user: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
  logOut: PropTypes.func.isRequired,
  setFavorites: PropTypes.func.isRequired,
  userFavorites: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);