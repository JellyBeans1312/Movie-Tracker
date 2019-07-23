import React from 'react';
import { shallow } from 'enzyme';
import { SignUpMenu, mapStateToProps, mapDispatchToProps} from './SignUpMenu'
import { showError, login } from '../../actions'

describe('SignUpMenu', () => {
  let wrapper;
  let mockLogin;
  let mockShowErrorFunc;
  let mockShowError;
  let mockUser;

  beforeEach(() => {
    mockUser = {}
    mockLogin = jest.fn();
    mockShowErrorFunc = jest.fn()
    mockShowError = 'email incorrect';
    wrapper = shallow(<SignUpMenu showError={mockShowErrorFunc} login={mockLogin} showError={mockShowError} user={mockUser}/>);
  });

  describe('SignUpMenu Component', () => {
    it('should update state when handle add change is called', () => {
      const mockEvent = {target: {name: 'Nombre', value:'password'}}
      const expected = 'password';

      wrapper.instance().handleAddChange(mockEvent);

      expect(wrapper.state('Nombre')).toEqual(expected)
    })
  })

  describe('mapStateToProps', () => {
    it('should return an error', () => {
      const mockState = {
        showError: 'wrong email and password',
        user:{}
      }
      const expected = {
        showError: 'wrong email and password'
      }
      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with a login error', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = login(1, 'nombre@nombre.com', 'password')
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.login(1, 'nombre@nombre.com', 'password')

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})