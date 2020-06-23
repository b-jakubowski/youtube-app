import { useState, useEffect } from 'react';
import { searchForYtMovie } from '../api/ytApi';

const useFetchYtMovies = searchValue => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [videoDetails, setVideoDetails] = useState({
    title: '',
    description: '',
    channelName: '',
    id: ''
  });

  useEffect(() => {
    if (searchValue) {
      fetchMovieAndSetUrl(searchValue);
    }
  }, [searchValue]);

  const fetchMovieAndSetUrl = async title => {
    try {
      setLoading(true);
      const res = await (await searchForYtMovie(title)).json();

      if (res.items && res.items.length) {
        const videoId = res.items[0].id.videoId;
        const { title, description, channelTitle } = res.items[0].snippet;

        setVideoDetails({ title, description, channelTitle, id: videoId });
      }

      res.pageInfo.totalResults === 0 ? setNoResults(true) : setNoResults(false);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return [error, loading, videoDetails, noResults];
};

export default useFetchYtMovies;
