import React, { useState } from 'react';
import { addQuote, clearCompleted } from '../actions';
import { connect } from 'react-redux';

const QuoteForm = (props) => {
	const [ authorInput, setAuthornput ] = useState('');
	const [ textInput, setTextInput ] = useState('');
	//console.log(props);
	return (
		<React.Fragment>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					props.addQuote(authorInput, textInput);
					setAuthornput('');
					setTextInput('');
				}}
			>
				<input
					placeholder="add author..."
					onChange={(e) => setAuthornput(e.target.value)}
					value={authorInput}
				/>
				<input placeholder="add  quote..." onChange={(e) => setTextInput(e.target.value)} value={textInput} />
				<button type="submit">Add Form</button>
			</form>
			<button onClick={props.clearCompleted}>Clear Completed</button>
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		quotes: state.quoteReducer
	};
};

export default connect(mapStateToProps, { addQuote, clearCompleted })(QuoteForm);
