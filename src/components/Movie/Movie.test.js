import React from 'react';
import { shallow } from 'enzyme';
import Movie from './Movie';

describe('Movie', () => {
  it.skip('renders the movie poster', () => {
    const wrapper = shallow(<Movie poster="http://poster.org" />);
    const poster = <img src={"http://poster.org"}/>

    expect(wrapper.contains(poster)).toEqual(true)
  })

  it('should match the snapshot', () => {
    const wrapper = shallow(<Movie poster="http://poster.org" />)

    expect(wrapper).toMatchSnapshot();
  })
})
