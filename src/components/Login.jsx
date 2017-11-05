import React, { Component } from 'react';
import fire from '../utils/fire';
import { fetchUserNetWorth } from '../utils/fetchHelpers';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: 'a@a.com',
      password: 'aaaaaa',
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

    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(function (error) {
        console.log('ERROR');
        console.log('CODE: ', error.code);
        console.log('MESSAGE: ', error.message);
      });

    fire.auth().onAuthStateChanged( (user) => {
      if (user) {
        this.props.setCurrentUserID(user.uid);
        this.props.fetchUserData(user.uid);
        this.props.history.push(`/portfolio/${this.props.currentUserID}`)
      }
    });
  }

  handleSignUp(event){
    event.preventDefault();

    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(function (error) {
        console.log('ERROR');
        console.log('CODE: ', error.code);
        console.log('MESSAGE: ', error.message);
      });

    fire.auth().onAuthStateChanged( (user) => {
      if (user) {
        fire.database().ref(`users/${user.uid}`).set({
          id: user.uid,
          portfolio: [],
          netWorth: 1000000
        });
        this.props.setCurrentUserID(user.uid);
        this.props.fetchUserData(user.uid);
        this.props.history.push(`/portfolio/`);

      }
    });
  };

  writeUserData(user){
    fire.database().ref(`users/${user.uid}`).set({
      id: user.uid,
      portfolio: [],
      netWorth: 100000
    });
  }

  generateErrorMessage(){
    if ( this.state.errorCode && this.state.errorMessage ) {
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
              className='input-email uppercase'
              type='email'
              placeholder='email'
              onChange={this.handleChange.bind(this, 'email')} />
            <input
              className='input-password uppercase'
              type='password'
              placeholder='password'
              onChange={this.handleChange.bind(this, 'password')} />
            <input
              className='input-verify-password uppercase'
              type='password'
              placeholder='veryify password'
              onChange={this.handleChange.bind(this, 'verifyPassword')} />
            <input
              className='input-login-button uppercase'
              type='submit' 
              value='log in'
              onClick={ this.handleLogin.bind(this) } />
            <input 
              className='input-signup-button uppercase'
              type='submit'
              value='sign up'
              onClick={ this.handleSignUp.bind(this) } />
            {this.generateErrorMessage}
          </form>
        </section>
      </div>
    );
  }
}