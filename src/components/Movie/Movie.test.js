import React from 'react';
import { shallow } from 'enzyme';
import Movie from './Movie';

describe('Movie', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Movie poster='' id={1} />
    )
  })
  it('should match snapshot', () => { 
    expect(wrapper).toMatchSnapshot()
  }); 
});


