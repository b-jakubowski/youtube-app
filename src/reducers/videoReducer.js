import { VIDEO } from '../constants';

const videoReducer = (state = {}, action) => {
  if (action.type === VIDEO.LOAD_SUCCESS) {
    return { ...state, ...action.video };
  }
  return state;
};

export default videoReducer;
