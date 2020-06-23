import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';
import videoReducer from './videoReducer';

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  video: videoReducer,
  error: errorReducer
});

export default rootReducer;
