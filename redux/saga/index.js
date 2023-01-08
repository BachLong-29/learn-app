import * as studentSaga from './studentSaga';
import * as testSaga from './testSaga';

export const initSagas = (sagaMiddleware) => {
  // Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
  Object.values(studentSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};
