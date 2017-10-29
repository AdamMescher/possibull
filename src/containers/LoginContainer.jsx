import { connect } from 'react-redux';
import Login from '../components/Login';
import { currentUserID } from '../actions/LoginContainerActions';


const mapStateToProps = store => ({
  currentUserID: store.currentUserID
});

const mapDispatchToProps = dispatch => ({ 

});

export default connect(mapStateToProps, undefined)(Login);