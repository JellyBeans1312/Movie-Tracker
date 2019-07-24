import React, { Component } from 'react';
import { SignUp } from '../SignUp/SignUp'
import { login, showError } from '../../actions';
import { connect } from 'react-redux';
import { getUser, addUser } from '../../api/apiCalls'
import { Redirect } from 'react-router'
import './SignUpMenu.css'
import PropTypes from 'prop-types';

export class SignUpMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      display: '',
      error: null
    };
  }

  handleAddChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name]: value })
  }

  handleAdd = async (e) => {
    try {
      e.preventDefault()
      const response = await addUser(this.state);
      console.log(response)
      if (response === true) {
        this.props.login(this.state)
        this.setState({display: 'loggedIn'})
      } else {
        this.setState({ error: "Email has already been used" });
      }
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    const isLoggedIn = this.state.display === 'loggedIn'
    let view;

    if(!isLoggedIn) {
      view = <SignUp name={this.state.name} email={this.state.email} password={this.state.password} handleAddChange={this.handleAddChange} handleAdd={this.handleAdd}/>
    } else {
      view = <Redirect to='/LoggedIn'/>
    }
    return (
      <section className='sign-up-bar' >
        {view}
        {this.state.error && <h2 className='error'>{this.state.error}</h2>}
      </section>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  showError: (error) => dispatch(showError(error))
});

SignUpMenu.propTypes = {
  login: PropTypes.func.isRequired,
  showError: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

export default connect(null, mapDispatchToProps)(SignUpMenu)
