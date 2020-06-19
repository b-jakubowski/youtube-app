import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';

import Search from './Search';
import Video from './Video';
import VideoDetails from './VideoDetails';
import { searchForYtMovie, setVideoUrl } from '../api/ytApi';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  padding: 1rem;
  background-color: #e8e8e8;
`;
const Button = styled.button`
  padding: 1rem;
  margin-left: 1rem;
`;

const Player = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [searchValue, setSearchValue] = useState('');
  const [videoPlay, setVideoPlay] = useState(false);
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
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Search setSearchValue={debounce(val => setSearchValue(val), 600)} />
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <Video
            loading={loading}
            url={videoDetails.id && setVideoUrl(videoDetails.id)}
            playing={videoPlay}
          />
          <Button
            onClick={() => setVideoPlay(val => !val)}
            disabled={videoDetails.id ? false : true}
          >
            <FontAwesomeIcon icon={videoPlay ? faPause : faPlay} />
          </Button>
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
