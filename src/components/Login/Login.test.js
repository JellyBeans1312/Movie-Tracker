import { shallow } from 'enzyme';
import React from 'react';
import { Login } from './Login';

describe('Login', () => {
  let wrapper;
  let instance;
  let handleChange;
  let handleSubmit;

  beforeEach(() => {
    handleChange = jest.fn();
    handleSubmit = jest.fn();
    wrapper = shallow(<Login handleChange={handleChange} handleSubmit={handleSubmit}/>);
    instance = wrapper.instance();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should invoke handleSubmit on submit', () => {
    const e = {
      preventDefault: jest.fn()
    }
    wrapper.find('form').simulate('submit');
    
    expect(wrapper.instance().handleSubmit(e));
  });

  it.skip('should invoke handleChange on change', () => {
    wrapper.find(".log-in-email").simulate('change', {value: 'whatever'})
    console.log(wrapper.length);
    expect(instance.handleChange());
  });
});