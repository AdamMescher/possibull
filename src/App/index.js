import "babel-polyfill";
import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Leaderboard from '../Leaderboard';
import Login from '../Login/';
import Portfolio from '../Portfolio';
import Search from '../Search';
import SingleStock from '../SingleStock';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <main>
          <Switch>
            <Route 
              exact patch='/' 
              component={Login} 
              key='Login' />
            <Route 
              exact patch='/portfolio' 
              component={Portfolio} 
              key='Portfolio' />
            <Route 
              exact patch='/search' 
              component={Search} 
              key='Search' />
            <Route 
              exact patch='/leaderboard' 
              component={Leaderboard} 
              key='Leaderboard' />
            <Route 
              exact patch='/stock/:symbol' 
              component={SingleStock} 
              key='StockInfo' />
          </Switch>
        </main>
      </div>
    );
  }
}
