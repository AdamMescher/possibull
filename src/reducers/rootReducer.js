import { combineReducers } from 'redux';
import { currentUserID } from './loginReducer';
import { searchTerm } from './LeaderboardReducer';
import { userDataObject, portfolioQuotes, combinedStockCurrentValue } from '../reducers/PortfolioContainerReducers';
import { stockSymbolToDisplay, stockDataObjectToDisplay } from './SearchResultsReducer';

const rootReducer = combineReducers({
  currentUserID,
  userDataObject,
  searchTerm,
  stockSymbolToDisplay,
  stockDataObjectToDisplay,
  portfolioQuotes,
  combinedStockCurrentValue
});

export default rootReducer;