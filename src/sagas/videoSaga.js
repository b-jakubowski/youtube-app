import { takeEvery, call, put } from 'redux-saga/effects';

import { VIDEO } from '../constants';
import { fetchVideo } from '../api/ytApi';
import { setVideo, setError } from '../actions';

function* handleVideoLoad(action) {
  try {
    const video = yield call(fetchVideo, action.title);
    yield put(setVideo(video));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchVideoLoad() {
  yield takeEvery(VIDEO.LOAD, handleVideoLoad);
}
