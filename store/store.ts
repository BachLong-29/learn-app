import { applyMiddleware, combineReducers, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import studentReducers from '../reducer/studentReducers';
import createSagaMiddleware from '@redux-saga/core';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const configureStore = () => {
  return createStore(
    combineReducers({
      student: studentReducers,
    }),
    composeWithDevTools(applyMiddleware(...middlewares))
  );
};

export const wrapper = createWrapper(configureStore, { debug: true });
