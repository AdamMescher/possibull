import { dispatch } from 'react';
import { connect } from 'react-redux';
import SearchResults from '../components/SearchResults';
import { stockSymbolToDisplay } from '../reducers/SearchResultsReducer'; 
import { addStockSymbolToDisplay, stockDataObjectToDisplay } from '../actions/SearchResultsActions'; 
import { searchTerm } from '../actions/LeaderboardActions';

const mapStateToProps = store => ({
  searchTerm: store.searchTerm,
  stockSymbolToDisplay: store.stockSymbolToDisplay,
  stockDataObjectToDisplay: store.StockDateObjectToDisplay,
  searchTerm: store.searchTerm
});

const mapDispatchToProps = dispatch => ({
  addStockSymbolToDisplay: (stockSymbol) => dispatch(addStockSymbolToDisplay(stockSymbol) ),
  setStockDataObjectToDisplay: (stockDataObject) => dispatch(stockDataObjectToDisplay(stockDataObject)),
  setSearchTerm: (term) => dispatch(searchTerm(term))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);