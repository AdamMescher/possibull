import { connect } from 'react-redux';
import Portfolio from '../components/Portfolio';
import { userDataObject } from '../actions/PortfolioContainerActions';
import { fetchUserData } from '../utils/fetchHelpers';
import { searchTerm } from '../actions/LeaderboardActions';
import { stockDataObjectToDisplay } from '../actions/SearchResultsActions';



const mapStateToProps = store => ({
  currentUserID : store.currentUserID,
  userDataObject: store.userDataObject,
  searchTerm    : store.searchTerm
});

const mapDispatchToProps = dispatch => ({
  fetchUserData: userID   => fetchUserData( userID ),
  setUserData  : userData => dispatch( userDataObject( userData ) ),
  setSearchTerm: term     => dispatch( searchTerm( term ) ),
  setStockDataObjectToDisplay: stockData => dispatch(stockDataObjectToDisplay(stockData))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Portfolio);