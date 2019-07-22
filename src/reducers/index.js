import { combineReducers } from 'redux';
import { movieReducer } from './movieReducer';
import { loginUserReducer, showErrorReducer, userFavoritesReducer } from './userReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  login: loginUserReducer,
  showError: showErrorReducer,
  userFavorites: userFavoritesReducer
});

export default rootReducer;