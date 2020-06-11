// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
const mathReducer = (
  state = {
    result: 1,
    lastValues: [],
  },
  action
) => {
  switch (action.type) {
    case 'ADD':
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload],
      };
      break;
    case 'SUBTRACT':
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload],
      };
      break;
    default:
      break;
  }
  return state;
};

const userReducer = (
  state = {
    name: 'Ducky',
    age: 35,
  },
  action
) => {
  switch (action.type) {
    case 'SET_NAME':
      state = {
        ...state,
        name: action.payload,
      };
      break;
    case 'SET_AGE':
      state = {
        ...state,
        age: action.payload,
      };
      break;
    default:
      break;
  }
  return state;
};

const store = createStore(
  combineReducers({ mathReducer, userReducer }),
  {},
  applyMiddleware(logger)
);

store.subscribe(() => {
  console.log('Store Updated!', store.getState());
});

store.dispatch({
  type: 'ADD',
  payload: 10,
});

store.dispatch({
  type: 'ADD',
  payload: 20,
});

store.dispatch({
  type: 'SUBTRACT',
  payload: 30,
});

store.dispatch({
  type: 'SET_NAME',
  payload: 'Alice',
});

store.dispatch({
  type: 'SET_AGE',
  payload: 29,
});
