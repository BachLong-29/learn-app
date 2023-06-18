import { $FixType, Student } from '../../utils/constants';

import { cloneDeep } from 'lodash';
import { studentAction } from '../../utils/common/constants';

const initialState: $FixType[] = [];
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
      return cloneData.map((item: any) => {
        if(item.id === action.payload.data.studentId) {
          return {
            id: item.id,
            ...action.payload.data.data
          }
        }
        return item;
      });
    default:
      return state;
  }
};

export default reducer;
