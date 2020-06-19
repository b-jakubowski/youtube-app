import React, { useState } from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';

import Search from './Search';
import Video from './Video';
import VideoDetails from './VideoDetails';
import { setVideoUrl } from '../api/ytApi';
import useFetchYtMovies from '../hooks/useFetchYtMovies';
import PlayPauseButton from './PlayPauseButton';

const Container = styled.div`
  padding: 1rem;
  background-color: #e8e8e8;
`;

const Player = () => {
  const [searchValue, setSearchValue] = useState('');
  const [error, loading, videoDetails] = useFetchYtMovies(searchValue);
  const [videoPlay, setVideoPlay] = useState(false);

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
          <PlayPauseButton
            onClick={() => setVideoPlay(val => !val)}
            id={videoDetails.id}
            play={videoPlay}
          />
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
