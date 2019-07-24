import React from 'react';
import './Login.css'
import PropTypes from 'prop-types';

export const Login = ({ email, password, handleChange, handleSubmit}) => {
  return (
    <section>
      <form className='log-in-form' onSubmit={handleSubmit}>
        <input className='log-in-email'
          type="text"
          value={email}
          name="email"
          placeholder='example@example.com'
          onChange={handleChange}
          />
        <input className='log-in-password'
          type="password"
          value={password}
          name="password"
          placeholder='Password'
          onChange={handleChange}
          />
        <button className='log-in-btn'>Login</button>
      </form>
    </section>
     )
  };

  Login.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }