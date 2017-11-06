import { connect } from 'react-redux';
import Portfolio from '../components/Portfolio';
import { fetchUserDataHelper, fetchStockQuote, fetchPortfolioQuotesHelper } from '../utils/fetchHelpers';
import { searchTerm } from '../actions/LeaderboardActions';
import { stockDataObjectToDisplay, addStockSymbolToDisplay } from '../actions/SearchResultsActions';
import { userOwnedStocks } from '../actions/LoginContainerActions';
import { userDataObject, portfolioQuotes } from '../actions/PortfolioContainerActions';



const mapStateToProps = store => ({
  currentUserID: store.currentUserID,
  userDataObject: store.userDataObject,
  searchTerm: store.searchTerm,
  userOwnedStocks: store.userOwnedStocks,
  portfolioQuotes: store.portfolioQuotes,
  stockSymbolToDisplay: store.stockSymbolToDisplay,
});

const mapDispatchToProps = dispatch => ({
  fetchUserData: userID => dispatch( fetchUserDataHelper( userID ) ),
  fetchStockQuote: symbol => dispatch( fetchStockQuote( symbol ) ),
  setUserData: userData => dispatch( userDataObject( userData ) ),
  setSearchTerm: term => dispatch( searchTerm( term ) ),
  setStockDataObjectToDisplay: stockData => dispatch( stockDataObjectToDisplay( stockData ) ),
  setUserOwnedStocks: stocks => dispatch( userOwnedStocks( stocks ) ),
  fetchPortfolioQuotes: portfolio => dispatch( fetchPortfolioQuotesHelper( portfolio ) ),
  addStockSymbolToDisplay: stockSymbol => dispatch(addStockSymbolToDisplay(stockSymbol)),
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Portfolio);