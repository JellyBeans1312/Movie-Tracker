import React from 'react';
import './Login.css'

export const Login = ({ email, password, handleChange, handleSubmit}) => {
  return (
    <section>
      <form className='log-in-form' onSubmit={handleSubmit}>
        <input className='log-in'
          type="text"
          value={email}
          name="email"
          placeholder='example@example.com'
          onChange={handleChange}
          />
        <input className='log-in'
          type="text"
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
