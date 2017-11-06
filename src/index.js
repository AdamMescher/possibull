import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../src/components/App';
import LoginContainer from './containers/LoginContainer';
import PortfolioContainer from './containers/PortfolioContainer';
import LeaderboardContainer from './containers/LeaderboardContainer';
import SingleStockContainer from './containers/SingleStockContainer';
import SearchResultsContainer from './containers/SearchResultsContainer';


const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer, 
  devTools, 
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className='app'>
        <Route
          exact path='/'
          component={App}/>
        <Route
          path='/login'
          component=  {LoginContainer}/>
        <Route
          path='/portfolio'
          component=  {PortfolioContainer}/>
        <Route
          path='/leaderboard'
          component={LeaderboardContainer}/>
        <Route
          path='/search'
          component={SearchResultsContainer}/>
        <Route
          path='/stock'
          component=  {SingleStockContainer}/>
      </div>
    </Router>
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
