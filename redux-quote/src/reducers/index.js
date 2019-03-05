import uuid from 'uuid';
import { combineReducers } from 'redux';

const initialState = {
	dummyData: [
		{
			id: uuid(),
			author: 'Dr. Seuss',
			text: "Don't cry because it's over, smile because it happened."
		},
		{
			id: uuid(),
			author: 'Frank Zappa',
			text: 'So many books, so little time.'
		},
		{
			id: uuid(),
			author: 'Oscar Wilde',
			text: 'Be yourself; everyone else is already taken.'
		}
	]
};

const quoteReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

const rootReducer = combineReducers({ quoteReducer });

export default rootReducer;
