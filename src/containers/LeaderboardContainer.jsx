import { connect } from 'react-redux';
import { searchTerm } from '../actions/LeaderboardActions';
import { stockDataObjectToDisplay } from '../actions/SearchResultsActions';
import Leaderboard from '../components/Leaderboard';

const mapStateToProps = store => ({
  searchTerm: store.searchTerm,
  stockDataObjectToDisplay: store.stockDataObjectToDisplay
});

const mapDispatchToProps = dispatch => ({
  setSearchTerm: (term) => dispatch( searchTerm( term ) ),
  setStockDataObjectToDisplay: stockData => dispatch(stockDataObjectToDisplay(stockData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Leaderboard);