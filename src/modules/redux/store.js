import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

import reducers from './reducers';

const logger = createLogger({
  collapsed: true
});

const enhance = applyMiddleware(logger);
const composeEnhancers = window && window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const store = createStore(reducers, composeEnhancers(enhance));

export default store;