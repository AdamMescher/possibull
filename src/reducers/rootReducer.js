import { combineReducers } from 'redux';
import { currentUserID } from './loginReducer';
import { userDataObject } from './PortfolioContainerReducers';
import { searchTerm } from './LeaderboardReducer';
import { stockSymbolToDisplay, stockDataObjectToDisplay } from './SearchResultsReducer';

const rootReducer = combineReducers({
  currentUserID,
  userDataObject,
  searchTerm,
  stockSymbolToDisplay,
  stockDataObjectToDisplay
});

export default rootReducer;