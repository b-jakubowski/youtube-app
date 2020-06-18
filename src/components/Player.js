import React from 'react';
import styled from 'styled-components';

import Search from './Search';
import Video from './Video';
import PlayPauseButton from './PlayPauseButton';
import VideoDetails from './VideoDetails';

const Container = styled.div`
  padding: 1rem;
  background-color: red;
`;

const Player = () => {
  return (
    <Container>
      <Search />
      <Video />
      <PlayPauseButton />
      <VideoDetails
        title="Test title"
        description="Test description"
        channelName="Test channel name"
      />
    </Container>
  );
};

export default Player;
