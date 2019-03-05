import React from 'react';

const Quote = (props) => {
	return (
		<React.Fragment>
			<h2>{props.quote.author}</h2>
			<p>{props.quote.text}</p>
		</React.Fragment>
	);
};

export default Quote;
