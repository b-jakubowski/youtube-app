import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

const Container = styled.div`
  display: flex;
  height: 25rem;
  padding: 1rem;
`;
const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: grey;
`;
const PlaceholderText = styled.p`
  text-align: center;
`;

const Video = ({ url, loading, playing, onReady }) => (
  <Container>
    {loading ? (
      <VideoContainer>
        <PlaceholderText>Loading...</PlaceholderText>
      </VideoContainer>
    ) : url ? (
      <VideoContainer>
        <ReactPlayer onReady={onReady} width="100%" height="100%" url={url} playing={playing} />
      </VideoContainer>
    ) : (
      <VideoContainer>
        <PlaceholderText>Search for video</PlaceholderText>
      </VideoContainer>
    )}
  </Container>
);

Video.propTypes = {
  url: PropTypes.string,
  loading: PropTypes.bool,
  playing: PropTypes.bool,
  onReady: PropTypes.func
};

export default Video;
