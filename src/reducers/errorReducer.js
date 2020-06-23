import { VIDEO } from '../constants';

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case VIDEO.LOAD_FAIL:
      return action.error;
    case VIDEO.LOAD:
    case VIDEO.LOAD_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default errorReducer;
