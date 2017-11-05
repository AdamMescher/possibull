import { connect } from 'react-redux';
import Login from '../components/Login';
import { currentUserID } from '../actions/LoginContainerActions';
import { fetchUserData } from '../utils/fetchHelpers';


const mapStateToProps = store => ({
  currentUserID   : store.currentUserID,
  currentNetWorth : store.currentNetWorth,
  currentPortfolio: store.currentPortfolio,
  userDataObject  : store.userDataObject
});

const mapDispatchToProps = dispatch => ({
  setCurrentUserID : userID => dispatch( currentUserID( userID ) ),
  fetchUserData    : userID => dispatch( fetchUserData( userID ) ),
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Login);