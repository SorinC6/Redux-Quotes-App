import uuid from 'uuid';

export const ADD_QUOTE = 'ADD_QUOTE';
export const TOGGLE_QUOTE = 'TOGGLE_QUOTE';
export const QUOTE_OF_THE_DAY = 'QUOTE_OF_THE_DAY';
export const DELETE_QUOTE = 'DELETE_QUOTE';

export const addQuote = (author, text) => {
	return {
		type: ADD_QUOTE,
		payload: {
			id: uuid(),
			author: author,
			text: text,
			completed: false
		}
	};
};

export const toggleQuote = (id) => {
	return {
		type: TOGGLE_QUOTE,
		payload: id
	};
};

export const quoteOfTheDay = (id) => {
	return {
		type: QUOTE_OF_THE_DAY,
		payload: id
	};
};

export const deleteQuote = (id) => {
	return {
		type: DELETE_QUOTE,
		payload: id
	};
};
