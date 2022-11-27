import { combineReducers, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import studentReducers from '../reducer/studentReducers';

const configureStore = () => {
  return createStore(
    combineReducers({
      student: studentReducers,
    }),
    composeWithDevTools()
  );
};

export const wrapper = createWrapper(configureStore, { debug: true });
