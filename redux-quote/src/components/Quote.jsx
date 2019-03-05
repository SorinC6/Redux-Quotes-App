import React from 'react';

const Quote = (props) => {
	const { author, text, id } = props.quote;
	return (
		<div onClick={() => props.toggleQuote(id)}>
			<h2>{author}</h2>
			<p>{text}</p>
			<button onClick={() => props.deleteQuote(id)}>Delete Quote</button>
		</div>
	);
};

export default Quote;
