import { VIDEO } from '../constants';

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case VIDEO.LOAD:
      return true;
    case VIDEO.LOAD_SUCCESS:
      return false;
    case VIDEO.LOAD_FAIL:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
