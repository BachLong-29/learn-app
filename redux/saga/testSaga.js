import { delay } from 'redux-saga/effects';

export function* testSaga() {
  while (true) {
    yield delay(1000);
  }
}