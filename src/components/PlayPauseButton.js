import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  padding: 1rem;
`;

const PlayPauseButton = () => {
  return (
    <Button>
      <FontAwesomeIcon icon={faPlay} />
    </Button>
  );
};

export default PlayPauseButton;
