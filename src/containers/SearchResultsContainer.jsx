import { connect } from 'react-redux';
import SearchResults from '../components/SearchResults';
import { addStockSymbolToDisplay, stockDataObjectToDisplay } from '../actions/SearchResultsActions'; 
import { searchTerm } from '../actions/LeaderboardActions';


const mapStateToProps = store => ({
  searchTerm              : store.searchTerm,
  stockSymbolToDisplay    : store.stockSymbolToDisplay,
  stockDataObjectToDisplay: store.StockDateObjectToDisplay,
});

const mapDispatchToProps = dispatch => ({
  addStockSymbolToDisplay: stockSymbol => dispatch( addStockSymbolToDisplay( stockSymbol ) ),
  setStockDataObjectToDisplay: stockDataObject => dispatch( stockDataObjectToDisplay( stockDataObject ) ),
  setSearchTerm: term => dispatch( searchTerm( term ) ),
  setStockDataObjectToDisplay: stockData => dispatch( stockDataObjectToDisplay( stockData ) )

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);