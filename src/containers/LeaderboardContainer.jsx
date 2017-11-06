import { connect } from 'react-redux';
import { searchTerm } from '../actions/LeaderboardActions';
import { stockDataObjectToDisplay } from '../actions/SearchResultsActions';
import Leaderboard from '../components/Leaderboard';
import { fetchUserDataHelper, fetchStockQuote } from '../utils/fetchHelpers';

const mapStateToProps = store => ({
  currentUserID: store.currentUserID,
  searchTerm: store.searchTerm,
  stockDataObjectToDisplay: store.stockDataObjectToDisplay
});

const mapDispatchToProps = dispatch => ({
  setSearchTerm: term => dispatch( searchTerm( term ) ),
  fetchStockQuote: symbol => dispatch( fetchStockQuote(symbol) ), 
  setStockDataObjectToDisplay: stockData => dispatch(stockDataObjectToDisplay(stockData)),
  fetchUserData: userID => fetchUserDataHelper(userID)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Leaderboard);