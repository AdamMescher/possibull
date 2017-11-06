import { connect } from 'react-redux';
import Search from '../components/Search';
import { stockDataObjectToDisplay } from '../actions/SearchResultsActions';
import { fetchStockQuote } from '../utils/fetchHelpers';
import { searchTerm } from '../actions/SearchContainerActions';

const mapStateToProps = store => ({
  searchTerm: store.searchTerm,
  stockDataObjectToDisplay: store.stockDataObjectToDisplay
});

const mapDispatchToProps = dispatch  => ({
  fetchStockQuote: symbol => dispatch( fetchStockQuote( symbol ) ),
  setSearchTerm: term => dispatch( searchTerm( term ) ),
  setStockDataObjectToDisplay: stockData => dispatch(
    stockDataObjectToDisplay( stockData ) )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
