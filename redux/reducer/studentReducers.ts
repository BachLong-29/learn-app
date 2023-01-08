import { Student } from '../../utils/constants';
import { cloneDeep } from 'lodash';
import { studentAction } from '../../utils/common/contants';

const initialState: Student[] = [];
const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case studentAction.POPULATE_STUDENT:
      return action.payload;
    case studentAction.ADD_STUDENT:
      return state.concat(action.payload);
    case studentAction.REMOVE_STUDENT:
      return state.filter((item: any) => item.id !== action.payload.id);
    case studentAction.EDIT_STUDENT:
      const cloneData = cloneDeep(state);
      const index = cloneData.findIndex(
        (item: Student) => item.id === action.payload.data.id
      );
      cloneData[index] = { ...action.payload.data };
      return cloneData;
    default:
      return state;
  }
};

export default reducer;
