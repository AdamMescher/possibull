import { connect } from 'react-redux';
import Login from '../components/Login';
import { currentUserID, userOwnedStocks } from '../actions/LoginContainerActions';
import { fetchUserDataHelper } from '../utils/fetchHelpers';


const mapStateToProps = store => ({
  currentUserID: store.currentUserID,
  userDataObject: store.userDataObject,
  userOwnedStocks: store.userOwnedStocks
});

const mapDispatchToProps = dispatch => ({
  setCurrentUserID: userID => dispatch( currentUserID( userID ) ),
  setUserOwnedStocks: stocks => dispatch( userOwnedStocks( stocks ) ),
  fetchUserData: userID => dispatch( fetchUserDataHelper( userID ) )
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Login);