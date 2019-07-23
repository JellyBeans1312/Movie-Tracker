import { shallow } from 'enzyme';
import { AccountMenu } from './AccountMenu';
import { getUser } from '../../api/apiCalls'
import React from 'react';
import { login, setFavorites } from '../../actions';
import { mapStateToProps, mapDispatchToProps } from './AccountMenu';

jest.mock('../../api/apiCalls', () => ({
  getUser: jest.fn().mockImplementation(() => {
    return { id: 1, name: "Taylor", password: "password", email: "tman2272@aol.com" }
  })
}));

describe('accountMenu', () => {
  
  describe('accountMenu component', () => {
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
      const e = {
        preventDefault: jest.fn()
      }
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })
      instance.handleSubmit(e);
      expect(wrapper.state('error')).toEqual("Email and password do not match");
    });
  })


  describe('mapStateToProps', () => {

    it('should return an object with user info', () => {
      const mockStore = {
        login: { id: 1, name: "Taylor", password: "password", email: "tman2272@aol.com" },
      }
  
      const expected = {
        user: { id: 1, name: "Taylor", password: "password", email: "tman2272@aol.com" },
      }

      const mappedProps = mapStateToProps(mockStore);

      expect(mappedProps).toEqual(expected)
    });
  });

  describe('dispatchStateToProps', () => {
    let e;

    beforeEach(() => {
      e = {
        preventDefault: jest.fn()
      }
    })
    
    it('calls dispatch with login action', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setFavorites([{title: 'spider-man'}, {name: 'lion king'}])

      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.setFavorites([{ title: 'spider-man' }, { name: 'lion king' }])

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('calls dispatch with setFavorites action', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = login({ name: "Taylor", password: "password", email: "tman2272@aol.com" })

      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.login({ name: "Taylor", password: "password", email: "tman2272@aol.com" })

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  });

})