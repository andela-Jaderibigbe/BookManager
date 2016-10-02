import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

/**
* Reducers
**/
import books from './books';
import ui from './ui';
import categories from './categories';
import authors from './authors';


/**
* Combine Reducers
**/
const rootReducer = combineReducers({
  books,
  ui,
  categories,
  authors,
  routing: routerReducer,
  form: formReducer
});

export default rootReducer;