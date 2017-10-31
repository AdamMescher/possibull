import { combineReducers } from 'redux';
import { currentUserID } from './loginReducer';
import { userPortfolio, userNetWorth, stockSymbolsArray } from './PortfolioContainerReducers';

const rootReducer = combineReducers({
  currentUserID,
  userPortfolio,
  userNetWorth,
  stockSymbolsArray
});

export default rootReducer;