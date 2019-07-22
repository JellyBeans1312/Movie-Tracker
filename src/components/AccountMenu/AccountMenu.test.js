import { shallow } from 'enzyme';
import { AccountMenu } from './AccountMenu';
import React from 'react';

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
})