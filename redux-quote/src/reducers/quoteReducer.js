import dummyQuotes from './dummyQuotes';
import { ADD_QUOTE, TOGGLE_QUOTE, DELETE_QUOTE, CLEAR_COMPLETED } from '../actions';

export default (state = dummyQuotes, action) => {
	console.log('reducer: ', state);
	switch (action.type) {
		case ADD_QUOTE:
			//console.log(action.payload);
			return state.concat(action.payload);
		case DELETE_QUOTE:
			return state.filter((quote) => quote.id !== action.payload);
		case TOGGLE_QUOTE:
			//console.log('reducer toggle ', action.payload);
			return state.map(
				(quote) => (quote.id === action.payload ? { ...quote, completed: !quote.completed } : quote)
			);
		case CLEAR_COMPLETED:
			return state.filter((quote) => !quote.completed);
		default:
			return state;
	}
};
