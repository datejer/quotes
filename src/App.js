import React from "react";
import styled from "styled-components";

import quotes from "./_quotes";
import gradients from "./_gradients";

const gradient = gradients[Math.floor(Math.random() * gradients.length)];

const Container = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: ${gradient};
`;

const Text = styled.h1`
	position: relative;
	display: inline-block;
	padding: 0.5em;
	color: #fff;
	font-size: 5em;
	font-weight: 700;
	text-shadow: 7px 7px 0px rgba(255, 255, 255, 0.3);
	@media (max-width: 500px) {
		font-size: 4em;
	}
	text-align: center;
	max-width: 80%;
	::before {
		position: absolute;
		bottom: 0;
		left: 0;
		content: "„";
	}
	::after {
		position: absolute;
		top: 0;
		right: 0;
		content: "”";
	}
`;

// const Quotation = styled.span`
// 	margin: 0 0.5em;
// `;

const App = () => {
	const quote = quotes[Math.floor(Math.random() * quotes.length)];

	return (
		<Container>
			{/* <Quotation>„</Quotation> */}
			<Text>{quote}</Text>
			{/* <Quotation>”</Quotation> */}
		</Container>
	);
};

export default App;
