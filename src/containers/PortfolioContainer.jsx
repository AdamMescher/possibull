import { dispatch } from 'react';
import { connect } from 'react-redux';
import Portfolio from '../components/Portfolio';
import { stockSymbolsArray, userPortfolio, userNetWorth } from '../actions/PortfolioContainerActions';
import { currentUserID } from '../actions/LoginContainerActions';

const mapStateToProps = store => ({
  stockSymbolsArray: store.stockSymbolsArray,
  currentUserID: store.currentUserID,
  userPortfolio: store.userPortfolio,
  userNetWorth: store.userNetWorth
});

const mapDispatchToProps = dispatch => ({
  grabUserPortfolio: (userID) => {
    fetch(`https://possibull-5f513.firebaseio.com/users/${userID}.json?auth=6RWMq4uaA8HwU66qABed65Z1ZilpzXerJzKTpJCJ`)
      .then( response => response.json() )
      .then( parsed => dispatch( userNetWorth(parsed.netWorth) ) );
  },
  grabStockSymbolsArray: () => {
    fetch('https://possibull-5f513.firebaseio.com/symbols.json?auth=6RWMq4uaA8HwU66qABed65Z1ZilpzXerJzKTpJCJ')
      .then(response => response.json() )
      .then ( parsed => Object.keys(parsed).map( stockSymbol => parsed[stockSymbol] ) )
      .then( symbolsArray => dispatch( stockSymbolsArray(symbolsArray) ) )
  }


});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Portfolio);