export const showErrorReducer = (state = '', action) => {
  switch (action.type) {
    case "SHOW_ERROR":
      return action.error
  
    default:
      return state;
  }
}

export const loginUserReducer = (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN':
      return action.user;
    case 'LOGOUT':
      return {}
    default:
      return state;
  }
}

export const userFavoritesReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_FAVORITES':
      return action.favorites;
    default:
      return state;
  }
}