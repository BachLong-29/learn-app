import { Student } from '../../utils/constants';
import { studentAction } from '../../utils/common/contants';

export const addStudentRedux = (payload: Student) => {
  return { type: studentAction.ADD_STUDENT, payload: payload };
};
export const removeStudentRedux = (id: string) => {
  return { type: studentAction.REMOVE_STUDENT, payload: { id } };
};

export const editStudentRedux = (data: Student) => {
  return { type: studentAction.EDIT_STUDENT, payload: { data } };
};
