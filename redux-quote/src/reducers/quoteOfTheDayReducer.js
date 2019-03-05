import { QUOTE_OF_THE_DAY } from '../actions';

export default (state = null, action) => {
	switch (action.type) {
      case QUOTE_OF_THE_DAY:
         return action.payload
		default:
			return state;
	}
};
