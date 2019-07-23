import React from 'react';
import { shallow } from 'enzyme';
import { MovieSpecs, mapDispatchToProps, mapStateToProps } from './MovieSpecs';;
import { setFavorites } from '../../actions'

describe('MovieSpecs', () => {
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
    beforeEach(() => {
      wrapper = shallow(
      <MovieSpecs props={mockMovies} />
    )
  }); 

  window.fetch = jest.fn().mockImplementation(() =>{
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockMovies)
    })
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot() 
  });

  it('should ', async () => {

  });
  
  describe('mapStateToProps', () => {
    it('should return an object with the user in it', () => {
      const mockState = {
        login: {
          id: 1,
          name: 'Andre',
          password: 'something',
          email: 'aintNOthang@butaChickenWang.com'
        },
        filter: 'LOGIN'
      }
      const expected = {
        user: {
          id: 1,
          name: 'Andre',
          password: 'something',
          email: 'aintNOthang@butaChickenWang.com'
        }
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  });

  describe('mapDispatchToProps', () => {
    it('should call setFavorites action when handleFavorite and handleDelete is called', () => {
      const mockFavorite = {
        movie_id: 1,
        user_id: 1,
        title: 'Spider-Man: Far From Home',
        poster_path: 'posterpathStufasd',
        release_date: '2019-07-12',
        vote_average: 7.8,
        overview: 'spiderman shoots his webs out'
      }
      const mockDispatch = jest.fn()
      const actionToDispatch = setFavorites(mockFavorite)
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setFavorites(mockFavorite)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });
  });
});