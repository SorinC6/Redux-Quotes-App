import React, { useState } from 'react';
import { addQuote } from '../actions';
import { connect } from 'react-redux';

const QuoteForm = (props) => {
	const [ authorInput, setAuthornput ] = useState('');
	const [ textInput, setTextInput ] = useState('');
	console.log(props);
	return (
		<React.Fragment>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					props.addQuote(authorInput, textInput);
				}}
			>
				<input placeholder="add author..." onChange={(e) => setAuthornput(e.target.value)} />
				<input placeholder="add  quote..." onChange={(e) => setTextInput(e.target.value)} />
				<button type="submit">Add Form</button>
			</form>
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		quotes: state.quoteReducer
	};
};

export default connect(mapStateToProps, { addQuote })(QuoteForm);
