import "babel-polyfill";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { currentUserID, userOwnedStocks } from './actions';
import { fetchUserDataHelper } from '../utils/fetchHelpers';
import fire from '../utils/fire';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      verifyPassword: '',
      errorCode: '',
      errorMessage: ''
    };
    this.handleLogin.bind(this);
  }

  handleChange(key, event){
    this.setState({
      [key]: event.target.value
    });
  }

  handleLogin(event) {
    event.preventDefault();

    fire.auth().signInWithEmailAndPassword(
      this.state.email, this.state.password
    ).catch(function(error) {
      alert(error.message);
    });

    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.setCurrentUserID(user.uid);
        this.props.fetchUserData(user.uid);
        this.props.history.push('/portfolio');
      }
    });
  }

  handleSignUp(event){
    event.preventDefault();

    if (this.state.password !== this.state.verifyPassword) {
      alert('Passwords do not match');
    }

    fire.auth().createUserWithEmailAndPassword(
      this.state.email, this.state.password
    ).catch(function(error) {
      alert(error.message);
    });

    fire.auth().onAuthStateChanged(user => {
      if (user) {
        fire.database().ref(`users/${user.uid}`).set({
          id: user.uid,
          portfolio: [],
          netWorth: 1000000
        });
        this.props.setCurrentUserID(user.uid);
        this.props.fetchUserData(user.uid);
        this.props.history.push(`/portfolio`);
      }
    });
  }

  writeUserData(user){
    fire.database().ref(`users/${user.uid}`).set({
      id: user.uid,
      portfolio: [],
      netWorth: 100000
    });
  }

  generateErrorMessage(){
    if (this.state.errorCode && this.state.errorMessage) {
      return (
        <div>
          <h3>{this.state.errorCode}</h3>
          <h3>{this.state.errorMessage}</h3>
        </div>
      );
    }
  }

  render(){
    return (
      <div className='login-container'>
        <section className='login-form-container'>
          <form className='login-form'>
            <h1>POSSIBULL</h1>
            <input
              className='input-email'
              type='email'
              placeholder='email'
              onChange={this.handleChange.bind(this, 'email')} />
            <input
              className='input-password'
              type='password'
              placeholder='password'
              onChange={this.handleChange.bind(this, 'password')} />
            <input
              className='input-verify-password'
              type='password'
              placeholder='veryify password'
              onChange={this.handleChange.bind(this, 'verifyPassword')} />
            <input
              className='input-login-button'
              type='submit'
              value='Log In'
              onClick={ this.handleLogin.bind(this) } />
            <input
              className='input-signup-button'
              type='submit'
              value='Sign Up'
              onClick={ this.handleSignUp.bind(this) } />
          </form>
        </section>
      </div>
    );
  }
}

Login.propTypes = {
  currentUserID: PropTypes.string,
  fetchUserData: PropTypes.func,
  history: PropTypes.object,
  setCurrentUserID: PropTypes.func,
  setUserOwnedStocks: PropTypes.func,
  userDataObject: PropTypes.object,
  userOwnedStocks: PropTypes.array
};

const mapStateToProps = store => ({
  currentUserID: store.currentUserID,
  userDataObject: store.userDataObject,
  userOwnedStocks: store.userOwnedStocks
});

const mapDispatchToProps = dispatch => ({
  setCurrentUserID: userID => dispatch(currentUserID(userID)),
  setUserOwnedStocks: stocks => dispatch(userOwnedStocks(stocks)),
  fetchUserData: userID => dispatch(fetchUserDataHelper(userID))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));