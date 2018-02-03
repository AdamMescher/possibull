import { combineReducers } from 'redux';
import { currentUserID } from './Login/reducers';
import { searchTerm } from './Leaderboard/reducers';
import {
  userDataObject,
  portfolioQuotes,
  combinedStockCurrentValue } from './Portfolio/reducers';
import {
  stockSymbolToDisplay,
  stockDataObjectToDisplay } from './SearchResults/reducers';

const rootReducer = combineReducers( {
  currentUserID,
  userDataObject,
  searchTerm,
  stockSymbolToDisplay,
  stockDataObjectToDisplay,
  portfolioQuotes,
  combinedStockCurrentValue
} );

export default rootReducer;