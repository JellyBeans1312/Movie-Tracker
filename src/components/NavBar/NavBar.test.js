import React from 'react';
import { shallow } from 'enzyme';
import { NavBar, mapStateToProps, mapDispatchToProps } from './NavBar';
import { logOut, setFavorites } from '../../actions';

describe('NavBar', () => {
  let wrapper;

  const mockMovies = [
    {
      vote_count:411,
      id:420818,
      video:false,
      vote_average:7,
      title:"The Lion King",
      popularity:585.503,
      poster_path:"/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg",
      original_language:"en",
      original_title:"The Lion King",
      backdrop_path:"/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg",
      adult:false,
      overview:"Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.",
      release_date:"2019-07-12"}
  ]

  const mockUser = {
    id: 1,
    name: 'Andre 3000',
    password: 'imBetterThanBiGBOI324',
    email: 'blah@blah.com'
  }
  beforeEach(() => {
    wrapper = shallow(
      <NavBar
      movies={mockMovies}
      user={mockUser}
      />
    )
  });
  it('should match snapshot',() => {
    expect(wrapper).toMatchSnapshot() 
  });
  
  
  describe('mapStateToProps', () => {
    it('should return an array with the users favorite moveis', () => {
      const mockState = {
        userFavorites: [{mockMovies}],
        filter: 'SET_FAVORITES'
      }
      const expected ={
        userFavorites: [{mockMovies}]
      }
      const mappedProps = mapStateToProps(mockState)
  
      expect(mappedProps).toEqual(expected)
    });
  }); 
  describe('mapDispatchToProps', () => {
    it('should call logout dispatch when logout is clicked', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = logOut();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.logout();

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call setFavorites when logout is clicked', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setFavorites();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setFavorites();

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });
  });
}); 