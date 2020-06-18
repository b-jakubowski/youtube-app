import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';

import Search from './Search';
import Video from './Video';
import PlayPauseButton from './PlayPauseButton';
import VideoDetails from './VideoDetails';
import { searchForYtMovie, setVideoUrl } from '../api/ytApi';

const Container = styled.div`
  padding: 1rem;
  background-color: red;
`;

const Player = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [videoDetails, setVideoDetails] = useState({
    title: '',
    description: '',
    channelName: ''
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

      if (res.items.length) {
        const videoId = res.items[0].id.videoId;
        const { title, description, channelTitle } = res.items[0].snippet;

        setVideoLink(setVideoUrl(videoId));
        setVideoDetails({ title, description, channelTitle });
      }
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Search setSearchValue={debounce(val => setSearchValue(val), 500)} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <Video url={videoLink} />
          <PlayPauseButton />
          <VideoDetails
            title={videoDetails.title}
            description={videoDetails.description}
            channelTitle={videoDetails.channelTitle}
          />
        </>
      )}
    </Container>
  );
};

export default Player;
