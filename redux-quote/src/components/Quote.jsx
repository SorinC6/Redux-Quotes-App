import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
	max-width: 40%;
	border-style: double;
	text-align: center;
	background-color: ${(props) => (props.ifCompleted ? 'purple' : 'gray')};
	color: ${(pr) => (pr.highlight ? 'green' : '#f4f4f4')};
`;

const Quote = (props) => {
	const { author, text, id, completed } = props.quote;
	return (
		<div>
			<WrapperDiv onClick={() => props.toggleQuote(id)} ifCompleted={completed} highlight={props.isQuoteOfTheDay}>
				<h2>{author}</h2>
				<p>{text}</p>
				<button onClick={() => props.deleteQuote(id)}>Delete Quote</button>
			</WrapperDiv>
			<button onClick={() => props.makeQuoteOfTheDay(id)}>Quote of the Day</button>
		</div>
	);
};

export default Quote;
