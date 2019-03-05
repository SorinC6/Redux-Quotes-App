import uuid from 'uuid';
import { combineReducers } from 'redux';

const initialState = {
	dummyData: [
		{
			id: uuid(),
			author: 'Dr. Seuss',
			text: "Don't cry because it's over, smile because it happened.",
			completed: false
		},
		{
			id: uuid(),
			author: 'Frank Zappa',
			text: 'So many books, so little time.',
			completed: false
		},
		{
			id: uuid(),
			author: 'Oscar Wilde',
			text: 'Be yourself; everyone else is already taken.',
			completed: false
		}
	]
};

const quoteReducer = (state = initialState.dummyData, action) => {
   //console.log('state: ',state)
	switch (action.type) {
		default:
			return state;
	}
};

const rootReducer = combineReducers({ quoteReducer });

export default rootReducer;
