import "babel-polyfill";
import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Leaderboard from '../Leaderboard';
import Login from '../Login/';
import Portfolio from '../Portfolio';
import SearchResults from '../SearchResults';
import SingleStock from '../SingleStock';
import NotFound from '../NotFound';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <main>
          <Switch>
            <Route 
              exact path='/' 
              component={Login} 
              key='Login' />
            <Route 
              exact path='/portfolio' 
              component={Portfolio} 
              key='Portfolio' />
            <Route 
              exact path='/search' 
              component={SearchResults} 
              key='Search' />
            <Route 
              exact path='/leaderboard' 
              component={Leaderboard} 
              key='Leaderboard' />
            <Route 
              exact path='/stock/:symbol' 
              component={SingleStock} 
              key='StockInfo' />
            <Route 
              path='*' 
              component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}
