import React from 'react';
import Player from './components/Player';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 45rem;
  padding: 1rem;
`;

function App() {
  return (
    <Container>
      <Content>
        <Player />
      </Content>
    </Container>
  );
}

export default App;
