import { dispatch } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import { stockDataObjectToDisplay } from '../actions/SearchResultsActions';

const mapStateToProps = store => ({
  searchTerm: store.searchTerm,
  stockDataObjectToDisplay: store.stockDataObjectToDisplay
});

const mapDispatchToProps = dispatch  => ({
  setSearchTerm: term => dispatch( searchTerm( term ) ),
  setStockDataObjectToDisplay: stockData => dispatch( stockDataObjectToDisplay( stockData ) )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);