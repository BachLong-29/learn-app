import { call, put, take } from 'redux-saga/effects';

import axios from 'axios';
import { studentAction } from '../../utils/common/constants';

// const getData = async () => {
//   const res = await studentApi.getAll();
//   return { data: res.data };
// };
export function* getAllStudents():any {
  yield take(studentAction.GET_ALL_STUDENT);
  const result = yield call(axios, 'http://localhost:3001/student');
  yield put({type: studentAction.POPULATE_STUDENT, payload: result.data});
  }
