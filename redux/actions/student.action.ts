import { $FixType, Student } from '../../utils/constants';

import { studentAction } from '../../utils/common/constants';

export const addStudentRedux = (payload: $FixType) => {
  return { type: studentAction.ADD_STUDENT, payload: payload };
};
export const removeStudentRedux = (id: string) => {
  return { type: studentAction.REMOVE_STUDENT, payload: { id } };
};

export const editStudentRedux = (data: $FixType) => {
  return { type: studentAction.EDIT_STUDENT, payload: { data } };
};

export const getAllStudent = () => {
  return { type: studentAction.GET_ALL_STUDENT };
};

export const populateStudent = (student: any) => {
  return { type: studentAction.POPULATE_STUDENT, payload: student };
};
