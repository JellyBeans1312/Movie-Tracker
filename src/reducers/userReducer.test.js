import { userReducer, showErrorReducer, loginUserReducer, userFavoritesReducer } from '../reducers/userReducer'

describe('showErrorReducer', () => {
  it('should return the initial state', () => {
    const expected = '';
    const result = showErrorReducer(undefined, {});

    expect(result).toEqual(expected)
  })

  it('should return the state with an error', () => {
    const expected = 'Error logging in';
    const action = {
      type: 'SHOW_ERROR',
      error: 'Error logging in'
    };
    const result = showErrorReducer('', action);
    expect(result).toEqual(expected)
  })
})

describe('loginUserReducer', () => {
  it('should return the initial state', () => {
    const expected = {};
    const result = loginUserReducer(undefined, {});
    expect(result).toEqual(expected)
  })

  it('should return the state with a user logged in', () => {
    const expected = {
      id: 1, 
      name: 'Aidan McKay',
      password: 'ILookLikeRobbie',
      email: 'aidanmckay0002@yahoo.com'
    }
    const action = {
      type: 'LOGIN',
      user: {
        id: 1, 
        name: 'Aidan McKay',
        password: 'ILookLikeRobbie',
        email: 'aidanmckay0002@yahoo.com'
      }
    }
    const result = loginUserReducer({}, action)
    expect(result).toEqual(expected)
  })

  it('should return the state with a user logged out', () => {
    const expected = {}
    const action = {
      type: 'LOGOUT',
      user: {}
    }
    const result = loginUserReducer({}, action)
    expect(result).toEqual(expected)
  })
})

describe('userFavoritesReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = userFavoritesReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return the state with a users favorites', () => {
    const expected = [{
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
    }]
    const action = {
      type: 'SET_FAVORITES',
      favorites: [{
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
      }]
    }
    const result = userFavoritesReducer([], action)
    expect(result.length).toEqual(1)
  })
})