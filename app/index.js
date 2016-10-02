import './index.scss';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store';

/**
* Root Element
*/
const appElm = document.querySelector('.container');

/**
* store
*/
const store = configureStore();

/**
* history
*/
const history = syncHistoryWithStore(browserHistory, store);

/**
* render Provider
*/
render((
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
), appElm);