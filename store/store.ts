import { applyMiddleware, combineReducers, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';
import { createWrapper } from 'next-redux-wrapper';
import studentReducers from '../reducer/studentReducers';
import { testSaga } from '../saga/testSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const configureStore = () => {
  const store = createStore(
    combineReducers({
      student: studentReducers,
    }),
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(testSaga);
  return store;
};

export const wrapper = createWrapper(configureStore, { debug: true });
