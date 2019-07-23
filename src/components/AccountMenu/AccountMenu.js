import React, { Component } from 'react';
import { Login } from '../Login/Login';
import { login, showError } from '../../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'
import { getUser } from '../../api/apiCalls'
import { fetchFavorites } from '../../api/apiCalls';
import { setFavorites } from '../../actions'
import './AccountMenu.css'
import PropTypes from 'prop-types';

export class AccountMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      display: 'start',
      error: null
    };
  }
  
  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = async (e) => {
    try {
      e.preventDefault()
      await getUser(this.state)
      .then(data => this.props.login(data))
      this.setState({display: 'loggedIn'})
      await fetchFavorites(this.props.user.id)
      .then(result => this.props.setFavorites(result))
    } catch (error) {
      this.setState({ error: error.message })
    }
  }

  render() {
    const isLoggedIn = this.state.display === 'loggedIn'
    let view;
    
    if(!isLoggedIn) {
      view = <Login email={this.state.email} password={this.state.password} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
    } else {
      view = <Redirect to='/LoggedIn'/>
    } 
    return (  
      <div className='log-in-bar'>
        {view}
        {this.state.error && <h2 className='error'>{this.state.error}</h2>}
      </div>
    )
  }
};

export const mapStateToProps = (store) => ({
  // login: store.login,
  user: store.login,
  // error: store.showError
});

export const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  // showError: (error) => dispatch(showError(error)),
  setFavorites: (favorites) => dispatch(setFavorites(favorites))
});

AccountMenu.propTypes = {
  user: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountMenu)
