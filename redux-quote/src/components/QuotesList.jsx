import React from 'react';
import { connect } from 'react-redux';
import Quote from './Quote';
import { deleteQuote, toggleQuote, makeQuoteOfTheDay } from '../actions';

const QuotesList = (props) => {
	console.log('Porps quote of the day: ', props.quoteOfTheDay);
	const quotes = props.quotes || [];

	const deleteQuote = (id) => {
		//console.log(id);
		props.deleteQuote(id);
	};

	const toggleQuote = (id) => {
		//console.log(id);
		props.toggleQuote(id);
	};
	return (
		<React.Fragment>
			{quotes.map((item) => {
				return (
					<Quote
						key={item.id}
						quote={item}
						deleteQuote={deleteQuote}
						toggleQuote={toggleQuote}
                  makeQuoteOfTheDay={props.makeQuoteOfTheDay}
                  isQuoteOfTheDay={item.id === props.quoteOfTheDay}
					/>
				);
			})}
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		quotes: state.quoteReducer,
		quoteOfTheDay: state.quoteOfTheDayReducer
	};
};

export default connect(mapStateToProps, { deleteQuote, toggleQuote, makeQuoteOfTheDay })(QuotesList);
