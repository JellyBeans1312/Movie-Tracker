import React from 'react';
import { connect } from 'react-redux';
import './SignUp.css'
import PropTypes from 'prop-types';

export const SignUp = ({name, email, password, handleAddChange, handleAdd}) => {
  return (
    <section>
      <form className='sign-in-form' onSubmit={handleAdd}>
        <input className='sign-up'
          type="text"
          value={name}
          name="name"
          placeholder='Name'
          onChange={handleAddChange}
        />
        <input className='sign-up'
          type="text"
          value={email}
          name="email"
          placeholder='example@example.com'
          onChange={handleAddChange}
        />
        <input className='sign-up'
          type="password"
          value={password}
          name="password"
          placeholder='Password'
          onChange={handleAddChange}
        />
      <button className='sign-up-btn'>Sign Up</button>
    </form>
  </section>
  )
};

export const mapStateToProps = store => ({
  error: store.error
});

SignUp.propTypes = {
  error: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleAddChange: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(SignUp);