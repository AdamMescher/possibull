import { connect } from 'react-redux';
import Login from '../components/Login';
import { currentUserID, userOwnedStocks } from '../actions/LoginContainerActions';
import { fetchUserData } from '../utils/fetchHelpers';


const mapStateToProps = store => ({
  currentUserID: store.currentUserID,
  currentNetWorth: store.currentNetWorth,
  currentPortfolio: store.currentPortfolio,
  userDataObject: store.userDataObject,
  userOwnedStocks: store.userOwnedStocks
});

const mapDispatchToProps = dispatch => ({
  setCurrentUserID: userID => dispatch( currentUserID( userID ) ),
  fetchUserData: userID => dispatch( fetchUserData( userID ) ),
  setUserOwnedStocks: stocks => dispatch( userOwnedStocks( stocks ) )
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Login);