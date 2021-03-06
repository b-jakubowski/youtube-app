const searchPart = 'snippet';
const searchMaxResults = 1;
const contentType = 'video';
const apiKey = process.env.REACT_APP_API_KEY;

export const searchForYtMovie = title => {
  return fetch(
    `https://www.googleapis.com/youtube/v3/search?part=${searchPart}&maxResults=${searchMaxResults}&q=${title}&type=${contentType}&key=${apiKey}`
  );
};

export const setVideoUrl = id => `https://www.youtube.com/embed/${id}?enablejsapi=1`;
