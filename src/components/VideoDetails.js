import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h3`
  padding: 1rem;
`;

const Subtitle = styled.p`
  padding: 0.5rem;
  margin-left: 0.5rem;
`;

const VideoDetails = ({ title, description, channelTitle }) => {
  return (
    <div>
      <Title>Title: {title}</Title>
      <Subtitle>Channel: {channelTitle}</Subtitle>
      <Subtitle>Description: {description}</Subtitle>
    </div>
  );
};

VideoDetails.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  channelTitle: PropTypes.string
};

export default VideoDetails;
