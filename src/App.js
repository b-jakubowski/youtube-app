import React from "react";
import Player from "./components/Player";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: yellow;
	min-height: 100vh;
	padding: 2rem;
`;

function App() {
	return (
		<Container>
			<Player />
		</Container>
	);
}

export default App;
