import React from 'react';
import { connect } from 'react-redux';

export const SignUp = ({name, email, password, handleAddChange, handleAdd}) => {
  return (
    <section>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          value={name}
          name="name"
          placeholder='Name'
          onChange={handleAddChange}
        />
        <input
          type="text"
          value={email}
          name="email"
          placeholder='example@example.com'
          onChange={handleAddChange}
        />
        <input
          type="text"
          value={password}
          name="password"
          placeholder='Password'
          onChange={handleAddChange}
        />
      <button>Sign Up</button>
    </form>
  </section>
  )
};

const mapStateToProps = store => ({
  error: store.error
});

export default connect(mapStateToProps)(SignUp);