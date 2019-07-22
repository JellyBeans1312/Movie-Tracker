import * as actions from './index'

describe('actions', () => {
  it('should have a type of SHOW_MOVIES', () => {
    const movies = [{
      vote_count: 411,
      id: 420818,
      video: false,
      vote_average: 7,
      title: "The Lion King",
      popularity: 585.503,
      poster_path: "/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg",
      original_language: "en",
      original_title: "The Lion King",
      backdrop_path: "/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg",
      adult: false,
      overview: "Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.",
      release_date: "2019-07-12"
    }];
    const expectedAction = {
      type: 'SHOW_MOVIES',
      movies
    };
    const result = actions.showMovies(movies);
    expect(result).toEqual(expectedAction);
  })

  it('should have a type of LOGIN', () => {
    const user = {
      id: 1, 
      name: 'Aidan McKay',
      password: 'ILookLikeRobbie',
      email: 'aidanmckay0002@yahoo.com'
    };

    const expectedAction = {
      type: 'LOGIN',
      user
    };
    const result = actions.login(user);
    expect(result).toEqual(expectedAction);
  })

  it('should have a type of LOGOUT', () => {
    const expectedAction = {
      type: 'LOGOUT'
    }
    const result = actions.logOut();
    expect(result).toEqual(expectedAction);
  })

  it('should have a type of SHOW_ERROR', () => {
    const error = 'Error logging in';
    const expectedAction = {
      type: 'SHOW_ERROR',
      error
    }
    const result = actions.showError(error);
    expect(result).toEqual(expectedAction);
  })

  it('should have a type of SET_FAVORITES', () => {
    const favorites = [{
      vote_count: 411,
      id: 420818,
      video: false,
      vote_average: 7,
      title: "The Lion King",
      popularity: 585.503,
      poster_path: "/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg",
      original_language: "en",
      original_title: "The Lion King",
      backdrop_path: "/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg",
      adult: false,
      overview: "Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.",
      release_date: "2019-07-12"
    }];
    const expectedAction = {
      type: 'SET_FAVORITES',
      favorites
    };
    const result = actions.setFavorites(favorites);
    expect(result).toEqual(expectedAction)
  })
})