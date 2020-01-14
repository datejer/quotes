import React from "react";
import styled from "styled-components";
import quotes from "./_quotes";

const Container = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Text = styled.h1`
	color: #fff;
	font-size: 5em;
	font-weight: 700;
	text-shadow: 7px 7px 0px rgba(255, 255, 255, 0.3);
	@media (max-width: 500px) {
		font-size: 4em;
	}
`;

const Quotation = styled.span`
	margin: 0 0.5em;
`;

function App() {
	let quote = quotes[Math.floor(Math.random() * quotes.length)];

	return (
		<Container>
			<Text>
				<Quotation>„</Quotation>
				{quote}
				<Quotation>”</Quotation>
			</Text>
		</Container>
	);
}

export default App;
