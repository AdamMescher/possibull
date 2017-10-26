import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './utils/rootReducer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/portfolio" component={PortfolioContainer} />
        <Route path="/leaderboard" component={LeaderboardContainer} />
      </div>
    </Router>
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
