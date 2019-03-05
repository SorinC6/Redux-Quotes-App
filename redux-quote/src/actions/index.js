import uuid from 'uuid';

export const ADD_QUOTE = 'ADD_QUOTE';
export const TOGGLE_QUOTE = 'TOGGLE_QUOTE';
export const QUOTE_OF_THE_DAY = 'QUOTE_OF_THE_DAY';

export const addQuote = (author, text) => {
	return {
		type: ADD_QUOTE,
		payload: {
			id: uuid(),
			author: author,
			text: text
		}
	};
};

export const toggleQuote = (id) => {};
