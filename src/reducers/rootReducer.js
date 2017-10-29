import { combineReducers } from 'redux';
import { currentUserID } from './loginReducer';
const rootReducer = combineReducers({
  currentUserID
});

export default rootReducer;