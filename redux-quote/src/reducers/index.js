import { combineReducers } from 'redux';
import quoteReducer from './quoteReducer';
import quoteOfTheDayReducer from './quoteOfTheDayReducer';

export default combineReducers({ quoteReducer, quoteOfTheDayReducer });
