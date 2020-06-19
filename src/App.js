import React from 'react';
import Player from './components/Player';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem;
`;

function App() {
  return (
    <Container>
      <Player />
    </Container>
  );
}

export default App;
