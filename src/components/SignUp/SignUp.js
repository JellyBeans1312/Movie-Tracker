import React from 'react';
import { connect } from 'react-redux';
import './SignUp.css'

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
          type="text"
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

export default connect(mapStateToProps)(SignUp);