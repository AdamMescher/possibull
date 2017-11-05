import { combineReducers } from 'redux';
import { currentUserID, userDataObject, userOwnedStocks } from './loginReducer';
import { searchTerm } from './LeaderboardReducer';
import { stockSymbolToDisplay, stockDataObjectToDisplay } from './SearchResultsReducer';

const rootReducer = combineReducers({
  currentUserID,
  userDataObject,
  searchTerm,
  stockSymbolToDisplay,
  stockDataObjectToDisplay,
  userOwnedStocks
});

export default rootReducer;