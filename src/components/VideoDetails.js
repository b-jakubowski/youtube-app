import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h3`
  padding: 1rem;
`;

const Subtitle = styled.p`
  padding: 0.5rem;
`;

const VideoDetails = ({ title, description, channelName }) => {
  return (
    <div>
      <Title>{title}</Title>
      <Subtitle>{description}</Subtitle>
      <Subtitle>{channelName}</Subtitle>
    </div>
  );
};

VideoDetails.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  channelName: PropTypes.string
};

export default VideoDetails;
