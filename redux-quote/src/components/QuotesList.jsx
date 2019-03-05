import React from 'react';
import { connect } from 'react-redux';
import Quote from './Quote';
import { deleteQuote, toggleQuote } from '../actions';
import { Processor } from 'postcss-selector-parser';

const QuotesList = (props) => {
	console.log('Porps: ', props);
	const quotes = props.quotes || [];

	const deleteQuote = (id) => {
		//console.log(id);
		props.deleteQuote(id);
	};

	const toggleQuote = (id) => {
      //console.log(id);
      props.toggleQuote(id)
	};
	return (
		<React.Fragment>
			{quotes.map((item) => {
				return <Quote key={item.id} quote={item} deleteQuote={deleteQuote} toggleQuote={toggleQuote} />;
			})}
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		quotes: state.quoteReducer
	};
};

export default connect(mapStateToProps, { deleteQuote, toggleQuote })(QuotesList);
