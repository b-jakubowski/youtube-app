import { VIDEO } from '../constants';

const loadVideo = title => ({
  type: VIDEO.LOAD,
  title
});

const setVideo = video => ({
  type: VIDEO.LOAD_SUCCESS,
  video
});

const setError = error => ({
  type: VIDEO.LOAD_FAIL,
  error
});

export { loadVideo, setVideo, setError };
