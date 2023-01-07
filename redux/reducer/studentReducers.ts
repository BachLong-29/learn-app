import { Student } from '../../utils/constants';
import { cloneDeep } from 'lodash';
import { studentAction } from '../../utils/common/contants';

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
    case studentAction.ADD_STUDENT:
      return state.concat(action.payload);
    case studentAction.REMOVE_STUDENT:
      return state.filter((item: any) => item.key !== action.payload.key);
    case studentAction.EDIT_STUDENT:
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
