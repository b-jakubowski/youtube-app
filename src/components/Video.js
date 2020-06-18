import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 20rem;
  padding: 1rem;
  background-color: green;
`;

const EmbedYoutube = styled.div`
  flex: 1;
  height: 100%;
  background-color: black;
`;

const Video = () => {
  return (
    <Container>
      <EmbedYoutube />
    </Container>
  );
};

export default Video;
