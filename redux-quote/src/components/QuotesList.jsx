import React from 'react';
import { connect } from 'react-redux';
import Quote from './Quote';

const QuotesList = (props) => {
	console.log('Porps: ', props);
	const quotes = props.quotes || [];
	return (
		<React.Fragment>
			{quotes.map((item) => {
				return <Quote key={item.id} quote={item} />;
			})}
			<p>sss</p>
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		quotes: state.quoteReducer
	};
};

export default connect(mapStateToProps)(QuotesList);
