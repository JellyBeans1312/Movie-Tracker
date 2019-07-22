import React from 'react';
import { shallow } from 'enzyme';
import { SignUp, mapStateToProps } from './SignUp'

describe('SignUp', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <SignUp 
      name = 'Andre 3000'
      email='andre@outkast.com'
      password='imBetterThanBIGBoi321'
      handleAdd= {jest.fn()}
      handleAddChange= {jest.fn()}
      />
    )
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return a string with an error', () => {
      const mockState = {
        error: 'This is wrong',
        filter: 'SHOW_ERROR'
      }
      const expected = {
        error: 'This is wrong'
      }

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    });
  }); 
});