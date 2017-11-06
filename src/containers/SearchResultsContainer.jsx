import { connect } from 'react-redux';
import SearchResults from '../components/SearchResults';
import {
  addStockSymbolToDisplay, 
  stockDataObjectToDisplay } from '../actions/SearchResultsActions';
import { searchTerm } from '../actions/LeaderboardActions';
import { fetchUserDataHelper, fetchStockQuote } from '../utils/fetchHelpers';


const mapStateToProps = store => ({
  currentUserID: store.currentUserID,
  searchTerm: store.searchTerm,
  stockSymbolToDisplay: store.stockSymbolToDisplay,
  stockDataObjectToDisplay: store.StockDateObjectToDisplay
});

const mapDispatchToProps = dispatch => ({
  fetchUserData: userID => fetchUserDataHelper(userID),
  fetchStockQuote: symbol => dispatch(fetchStockQuote(symbol)),
  addStockSymbolToDisplay: stockSymbol => dispatch(
    addStockSymbolToDisplay( stockSymbol ) ),
  setSearchTerm: term => dispatch( searchTerm( term ) ),
  setStockDataObjectToDisplay: stockData => dispatch(
    stockDataObjectToDisplay( stockData ) )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
