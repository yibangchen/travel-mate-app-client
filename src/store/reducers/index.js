import { combineReducers } from 'redux';
import currentUser from './currentUser';
import errors from './errors';
import itineraries from './itineraries';

const rootReducer = combineReducers({
  currentUser,
  errors,
  itineraries
});

export default rootReducer;