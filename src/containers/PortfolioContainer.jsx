import { connect } from 'react-redux';
import Portfolio from '../components/Portfolio';
import { fetchUserData, fetchStockQuote } from '../utils/fetchHelpers';
import { searchTerm } from '../actions/LeaderboardActions';
import { stockDataObjectToDisplay } from '../actions/SearchResultsActions';
import { userDataObject, userOwnedStocks } from '../actions/LoginContainerActions';


const mapStateToProps = store => ({
  currentUserID: store.currentUserID,
  userDataObject: store.userDataObject,
  searchTerm: store.searchTerm,
  userOwnedStocks: store.userOwnedStocks
});

const mapDispatchToProps = dispatch => ({
  fetchUserData: userID => fetchUserData( userID ),
  fetchStockQuote: symbol => dispatch( fetchStockQuote( symbol ) ),
  setUserData  : userData => dispatch( userDataObject( userData ) ),
  setSearchTerm: term => dispatch( searchTerm( term ) ),
  setStockDataObjectToDisplay: stockData => dispatch( stockDataObjectToDisplay( stockData ) ),
  setUserOwnedStocks: stocks => dispatch( userOwnedStocks( stocks ) ),
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Portfolio);