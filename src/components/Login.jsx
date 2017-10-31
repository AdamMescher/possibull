import React, { Component } from 'react';
import { Redirect } from 'react-router';
import fire from '../utils/fire';
// import fetchStockSymbols from '../utils/fetchHelpers';
import { setCurrentUserID } from '../reducers/loginReducer';
import iexURL from '../utils/iexURL';

export default class Login extends Component {
  constructor(){
    super();
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

  // componentDidMount() {
  //   fetch(`${iexURL}/ref-data/symbols`)
  //     .then(response => response.json())
  //     .then(parsed => {
  //       if(parsed){
          
  //         return parsed.map( stock => {
  //           if( stock.symbol.includes( '.' ) ){
  //             stock.symbol = stock.symbol.replace('.', '_period_')
  //           } 
  //           if (stock.symbol.includes('#')){
  //             stock.symbol = stock.symbol.replace('#', '_pound_')
  //           }
  //           console.log(stock.symbol);
  //           fire.database().ref(`symbols/${stock.symbol}`).set({
  //             symbol: stock.symbol,
  //             name: stock.name,
  //             type: stock.type
  //           })  
  //         })
  //       }
  //   })
  // }

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
        
        // STEP 2: REDIRECT TO PORTFOLIO
        return (<Redirect to='/portfolio' />)
      } else {
        this.props.setCurrentUserID('');
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
        

      } else {
        this.props.setCurrentUserID('');
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
  }

  redirectToPortfolio(){
    if(this.props.currentUserID.length){
      return (<Redirect to='/portfolio' />);
    }
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
        {this.redirectToPortfolio()}
      </div>
    );
  }
}