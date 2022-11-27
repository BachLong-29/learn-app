import { Student } from '../utils/constants';
import { cloneDeep } from 'lodash';

const initialState: Student[] = [
  {
    key: '1',
    name: 'John',
    age: 32,
    gender: 'male',
  },
  {
    key: '2',
    name: 'Jim',
    age: 42,
    gender: 'male',
  },
  {
    key: '3',
    name: 'Anne',
    age: 32,
    gender: 'female',
  },
];
const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case 'ADD':
      return state.concat(action.payload);
    case 'REMOVE':
      return state.filter((item: any) => item.key !== action.payload.key);
    case 'EDIT':
      const cloneData = cloneDeep(state);
      const index = cloneData.findIndex(
        (item: Student) => item.key === action.payload.data.key
      );
      cloneData[index] = { ...action.payload.data };
      return cloneData;
    default:
      return state;
  }
};

export default reducer;
