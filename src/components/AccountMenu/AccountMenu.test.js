import { shallow } from 'enzyme';
import { AccountMenu } from './AccountMenu';
import { getUser } from '../../api/apiCalls'
import React from 'react';

jest.mock('../../api/apiCalls', () => ({
  getUser: jest.fn().mockImplementation(() => {
    return { id: 1, name: "Taylor", password: "password", email: "tman2272@aol.com" }
  })
}));

describe('accountMenu', () => {
  let wrapper;
  let instance;
  let user;

  beforeEach(() => {
    user = { id: 1, name: "Taylor", password: "password", email: "tman2272@aol.com" };
    wrapper = shallow(<AccountMenu user={user} />);
    instance = wrapper.instance();
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should change state when handleChange is invoked', () => {
    const e = {
      target: {
        name: 'email',
        value: 'blah@blah.com'
      }
    }
    instance.handleChange(e)
    expect(wrapper.state('email')).toEqual('blah@blah.com')
  });

  it('should change state of display when handleSubmit resolves', async () => {
    const e = {
      preventDefault: jest.fn()
    }
    expect(wrapper.state('display')).toEqual('start');
    await instance.handleSubmit(e);
    expect(wrapper.state('display')).toEqual('loggedIn');
  });

  it('should set state of error when handleSubmit catches an error', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    instance.handleSubmit();
    expect(wrapper.state('error')).toEqual("Email and password do not match");
  });

  
})