import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  height: 25rem;
  padding: 1rem;
  background-color: green;
`;

const VideoContainer = styled.div`
  height: 100%;
  background-color: grey;
`;

const Video = ({ url }) => {
  useEffect(() => {}, [url]);

  return (
    <Container>
      {url ? (
        <VideoContainer>
          <iframe
            title="video"
            width="100%"
            height="100%"
            src={url}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </VideoContainer>
      ) : (
        <VideoContainer>
          <p>Search for video</p>
        </VideoContainer>
      )}
    </Container>
  );
};

Video.propTypes = {
  url: PropTypes.string
};

export default Video;
