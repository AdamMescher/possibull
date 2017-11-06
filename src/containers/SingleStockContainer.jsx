import { connect } from 'react-redux';
import SingleStock from '../components/SingleStock';
import { userPortfolio } from '../actions/SingleStockActions';
import { userDataObject } from '../actions/PortfolioContainerActions';
import { searchTerm } from '../actions/LeaderboardActions';
import { stockDataObjectToDisplay } from '../actions/SearchResultsActions';
import { fetchStockQuote, fetchUserDataHelper } from '../utils/fetchHelpers';

const mapStateToProps = store => ({
  stockSymbolToDisplay: store.stockSymbolToDisplay,
  stockDataObjectToDisplay: store.stockDataObjectToDisplay,
  currentUserID: store.currentUserID,
  userDataObject: store.userDataObject,
  searchTerm: store.searchTerm
});

const mapDispatchToProps = dispatch => ({
  addStockPurchaseToUserPortfolio: stockPurchaseDataObject => dispatch( userPortfolio( stockPurchaseDataObject ) ),
  setUserDataObject: userData => dispatch( userDataObject( userData ) ),
  setSearchTerm: term => dispatch( searchTerm( term ) ),
  setStockDataObjectToDisplay: stockData => dispatch( stockDataObjectToDisplay( stockData ) ),
  fetchStockQuote: symbol => dispatch( fetchStockQuote( symbol ) ),
  fetchUserData: userID => fetchUserDataHelper( userID ),
});

export default connect(
  mapStateToProps,  
  mapDispatchToProps
)(SingleStock);