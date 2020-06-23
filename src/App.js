import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';

import Player from './components/Player';
import configureStore from './store';

const store = configureStore();

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
    <Provider store={store}>
      <Container>
        <Content>
          <Player />
        </Content>
      </Container>
    </Provider>
  );
}

export default App;
