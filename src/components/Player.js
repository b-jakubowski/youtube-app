import React, { useState } from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';

import Search from './Search';
import Video from './Video';
import VideoDetails from './VideoDetails';
import { setVideoUrl } from '../api/ytApi';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFetchYtMovies from '../hooks/useFetchYtMovies';

const Container = styled.div`
  padding: 1rem;
  background-color: #e8e8e8;
`;
const Button = styled.button`
  padding: 1rem;
  margin-left: 1rem;
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
