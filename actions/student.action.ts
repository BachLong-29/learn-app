import { Student } from '../utils/constants';

export const addStudentRedux = (payload: Student) => {
  return { type: 'ADD', payload: payload };
};
export const removeStudentRedux = (key: string) => {
  return { type: 'REMOVE', payload: { key } };
};

export const editStudentRedux = (data: Student) => {
  return { type: 'EDIT', payload: { data } };
};
