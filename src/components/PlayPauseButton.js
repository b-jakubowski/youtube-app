import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import PropTyes from 'prop-types';

const Button = styled.button`
  padding: 1rem;
  margin-left: 1rem;
`;

const PlayPauseButton = ({ onClick, id, play }) => {
  return (
    <Button onClick={onClick} disabled={id ? false : true}>
      <FontAwesomeIcon icon={play ? faPause : faPlay} />
    </Button>
  );
};

PlayPauseButton.propTypes = {
  onClick: PropTyes.func,
  id: PropTyes.string,
  play: PropTyes.bool
};

export default PlayPauseButton;
