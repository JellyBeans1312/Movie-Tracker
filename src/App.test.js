import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  let instance;

  beforeEach(()=> {
    wrapper = shallow(<App />);
    instance = wrapper.instance();
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});