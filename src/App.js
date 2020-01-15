import React from "react";
import styled from "styled-components";

import quotes from "./_quotes";
import gradients from "./_gradients";

const gradient = gradients[Math.floor(Math.random() * gradients.length)];

const Container = styled.div`
	min-height: -webkit-fill-available;
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: ${gradient};
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
	-o-user-select: none;
`;

const Text = styled.h1`
	position: relative;
	display: inline;
	padding: 0.5em;
	color: #fff;
	font-size: 5em;
	font-weight: 700;
	text-shadow: 7px 7px 0px rgba(255, 255, 255, 0.3);
	@media (max-width: 550px) {
		font-size: 2em;
	}
	text-align: center;
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

const Footer = styled.footer`
	font-size: 1.2em;
	font-weight: 300;
	color: #fff;
	position: absolute;
	bottom: 0;
	margin: 1em 0;
	text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
`;

const Link = styled.a`
	color: #fff;
	font-weight: 400;
`;

const App = () => {
	const quote = quotes[Math.floor(Math.random() * quotes.length)];

	return (
		<Container onClick={() => window.location.reload()}>
			<Text>{quote}</Text>
			<Footer>
				Made by <Link href="http://ejer.ga">ejer</Link>
			</Footer>
		</Container>
	);
};

export default App;
