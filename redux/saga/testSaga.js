import { delay, put, take } from 'redux-saga/effects';

export function* testSaga() {
  while (true) {
    yield delay(1000);
    // console.log('im lionel messi.');
  }
}

export function* dispatchTest() {
  while (true) {
    yield delay(1000);
    yield put({ type: '' });
  }
}
