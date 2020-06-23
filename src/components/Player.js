import React, { useState } from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Search from './Search';
import Video from './Video';
import VideoDetails from './VideoDetails';
import { setVideoUrl } from '../api/ytApi';
import PlayPauseButton from './PlayPauseButton';
import { loadVideo } from '../actions';

const Container = styled.div`
  padding: 1rem;
  background-color: #e8e8e8;
`;

const Player = ({ isLoading, video, error, loadVideo }) => {
  const [videoPlay, setVideoPlay] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);

  const { videoId } = video.items?.length ? video.items[0]?.id : {};
  const { title, description, channelTitle } = video.items?.snippet || {};
  const noResults = (video?.items && video?.items?.length) === 0;

  return (
    <Container>
      <Search setSearchValue={debounce(val => loadVideo(val), 600)} />
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <Video
            loading={isLoading}
            url={videoId && setVideoUrl(videoId)}
            playing={videoPlay}
            onReady={() => setPlayerReady(true)}
            noResults={noResults}
          />
          <PlayPauseButton
            onClick={() => setVideoPlay(val => !val)}
            play={videoPlay}
            disabled={playerReady}
          />
          <VideoDetails title={title} description={description} channelTitle={channelTitle} />
        </>
      )}
    </Container>
  );
};

const mapStateToProps = ({ isLoading, video, error }) => ({
  isLoading,
  video,
  error
});

const mapDispatchToProps = dispatch => ({
  loadVideo: title => dispatch(loadVideo(title))
});

Player.propTypes = {
  isLoading: PropTypes.bool,
  video: PropTypes.object,
  error: PropTypes.any,
  loadVideo: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
