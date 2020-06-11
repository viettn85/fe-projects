import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { mathReducer } from './reducers/mathReducer';
import { userReducer } from './reducers/userReducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

export const store = createStore(
  combineReducers({ math: mathReducer, user: userReducer }),
  {},
  applyMiddleware(logger, thunk, promise)
);
