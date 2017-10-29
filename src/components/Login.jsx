import React, { Component } from 'react';
import { Redirect } from 'react-router';
import fire from '../utils/fire';

export default class Login extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      verifyPassword: '',
      errorCode: '',
      errorMessage: ''
    }
  }

  handleChange(key, event){
    this.setState({
      [key]: event.target.value
    })
  }

  handleLogin(event) {
    event.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(function (error) {
        console.log('ERROR');
        console.log('CODE: ', error.code);
        console.log('MESSAGE: ', error.message);
      });

    fire.auth().onAuthStateChanged(function (user) {
      if (user) {
        // SEND UID TO REDUX STORE
        
        // REDIRECT TO PORTFOLIO
      } else {
        console.log('SOMETHING WENT WRONG');
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

    fire.auth().onAuthStateChanged(function (user) {
      if (user) {
        fire.database().ref(`users/${user.uid}`).set({
          id: user.uid,
          portfolio: [],
          netWorth: 1000000
        });
      } else {
        console.log('SOMETHING WENT WRONG');
      }
    });

    // REDIRECT TO PORTFOLIO
  }

  writeUserData(user){
    fire.database().ref(`users/${user.uid}`).set({
      id: user.uid,
      portfolio: [],
      netWorth: 100000
    });
  };

  redirectToPortfolio(){
    return <Redirect to='/portfolio' />
  }

  generateErrorMessage(){
    if(this.state.errorCode && this.state.errorMessage){
      return(
        <div>
          <h3>{this.state.errorCode}</h3>
          <h3>{this.state.errorMessage}</h3>
        </div>
      )
    }
  }

  render(){
    return(
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
              className='login-button uppercase'
              type='submit' 
              value='log in'
              onClick={ this.handleLogin.bind(this) } />
            <input 
              className='signup-button uppercase'
              type='submit'
              value='sign up'
              onClick={ this.handleSignUp.bind(this) } />
              {this.generateErrorMessage}
          </form>
        </section>
      </div>
    )
  }
}