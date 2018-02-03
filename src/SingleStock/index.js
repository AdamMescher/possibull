import "babel-polyfill";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userPortfolio } from './actions';
import { searchTerm } from '../Leaderboard/actions';
import { userDataObject } from '../Portfolio/actions';
import { stockDataObjectToDisplay } from '../SearchResults/actions';
import { fetchStockQuote, fetchUserDataHelper } from '../utils/fetchHelpers';
import Header from '../Header';

import {
  checkAvailableFunds,
  checkNumberOfShares,
  generateNewPortfolio,
  generateNewNetWorth,
  setFirebaseObject,
  generateUpdatedUserObject } from '../utils/buyingAndSellingHelpers';

class SingleStock extends Component {
  constructor(props){
    super(props);
    this.state = {
      numberOfShares: 0
    };
  }

  componentDidMount(){
    this.props.fetchStockQuote( this.props.stockSymbolToDisplay );
  }

  generateStockPurchaseData = stock => ({
    symbol: stock.symbol,
    price: stock.latestPrice,
    numberOfShares: this.state.numberOfShares,
    cost: (this.state.numberOfShares * stock.latestPrice).toFixed(2)
  });

  updateObjectStores = (id, userObject) => {
    setFirebaseObject(id, userObject);
    this.props.setUserDataObject(userObject);
  }

  createNewEntryInPortfolio = transactionData => {
    if ( checkAvailableFunds(
      transactionData.cost,
      this.props.userDataObject.netWorth
    ) ) {
      const updatedUserObject = generateUpdatedUserObject(
        this.props.currentUserID,
        generateNewPortfolio(
          'buy',
          this.props.userDataObject.portfolio,
          this.props.stockDataObjectToDisplay.symbol,
          parseInt(transactionData.numberOfShares, 10)
        ),
        generateNewNetWorth(
          this.props.userDataObject.netWorth,
          transactionData.cost,
          'buy'
        )
      );
      this.updateObjectStores( this.props.currentUserID, updatedUserObject );
    } else {
      alert(`You don't have enough money to do that`);
    }
  }

  buyUpdateExistingEntryInPortfolio = transactionData => {
    if (checkAvailableFunds(
      transactionData.cost,
      parseInt(this.props.userDataObject.netWorth, 10))
    ){
      const updatedUserObject = generateUpdatedUserObject(
        this.props.currentUserID,
        generateNewPortfolio(
          'buy',
          this.props.userDataObject.portfolio,
          this.props.stockDataObjectToDisplay.symbol,
          parseInt(transactionData.numberOfShares, 10),
          this.props.userDataObject
            .portfolio[this.props.stockDataObjectToDisplay.symbol]
            .numberOfShares
        ),
        generateNewNetWorth(
          this.props.userDataObject.netWorth,
          transactionData.cost,
          'buy'
        )
      );
      this.updateObjectStores(this.props.currentUserID, updatedUserObject);
    } else {
      alert(`you don't have enough money to do that`);
    }
  }

  sellUpdateExistingEntryInPortfolio = transactionData => {
    if ( checkNumberOfShares(
      this.props.userDataObject
        .portfolio[transactionData.symbol].numberOfShares,
      transactionData.numberOfShares
    )){
      const updatedUserObject = generateUpdatedUserObject(
        this.props.currentUserID,
        generateNewPortfolio(
          'sell',
          this.props.userDataObject.portfolio,
          this.props.stockDataObjectToDisplay.symbol,
          parseInt(transactionData.numberOfShares, 10),
          this.props.userDataObject
            .portfolio[this.props.stockDataObjectToDisplay.symbol]
            .numberOfShares
        ),
        generateNewNetWorth(
          this.props.userDataObject.netWorth,
          transactionData.cost,
          'sell'
        )
      );
      this.updateObjectStores(this.props.currentUserID, updatedUserObject);
    } else {
      alert(`you don't have that many shares to sell`);
    }
  }

  handleBuyButtonClick = () => {
    !this.props.userDataObject.portfolio ||
    !this.props.userDataObject
      .portfolio[this.props.stockDataObjectToDisplay.symbol]
      ? this.createNewEntryInPortfolio(
        this.generateStockPurchaseData( this.props.stockDataObjectToDisplay )
      )
      : this.buyUpdateExistingEntryInPortfolio(
        this.generateStockPurchaseData( this.props.stockDataObjectToDisplay )
      );
  }

  handleSellButtonClick = () => {
    this.sellUpdateExistingEntryInPortfolio(
      this.generateStockPurchaseData( this.props.stockDataObjectToDisplay )
    );
  }

  handleChange(key, event){
    this.setState({
      [key]: event.target.value
    });
  }

  handleUpdatePorfolioButtonClick = () => {
    
  }

  render(){
    return (
      <div className='single-stock-container'>
        <Header
          history={this.props.history}
          userID={this.props.currentUserID}
          fetchUserData={this.props.fetchUserData}
          setSearchTerm={this.props.setSearchTerm}
          setStockDataObjectToDisplay={this.props.setStockDataObjectToDisplay}
          fetchStockQuote={this.props.fetchStockQuote}
        />
        <section className='ss-main'>
          <div>
            <div className='ss-stock-info'>
              <h3 className='ss-stock-title'>
                {`${this.props.stockDataObjectToDisplay.symbol}`}
              </h3>
              <p className='ss-stock-company-name'>
                {`${this.props.stockDataObjectToDisplay.companyName}`}
              </p>
              <p className='ss-stock-price'>
                {`$${this.props.stockDataObjectToDisplay.latestPrice}`}
              </p>
              <p className={
                this.props.stockDataObjectToDisplay.changePercent > 0
                  ? 'green'
                  : 'red'
              } >
                {
                  `${
                    (this.props.stockDataObjectToDisplay.changePercent * 100)
                      .toFixed(2) + ' %'}`
                }
              </p>
            </div>
            <div className='ss-button-container'>
              <button
                className='ss-button-buy'
                onClick={ this.handleBuyButtonClick }>
                BUY
              </button>
              <input
                min='1'
                type='number'
                className='ss-num-shares-input'
                placeholder='number of shares'
                onChange={ this.handleChange.bind(this, 'numberOfShares') }/>
              <button
                className='ss-button-sell'
                onClick={ this.handleSellButtonClick }>
                SELL
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

SingleStock.propTypes = {
  addStockPurchaseToUserPortfolio: PropTypes.func,
  currentUserID: PropTypes.string,
  fetchStockQuote: PropTypes.func,
  fetchUserData: PropTypes.func,
  history: PropTypes.object,
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
  setStockDataObjectToDisplay: PropTypes.func,
  setUserDataObject: PropTypes.func,
  stockDataObjectToDisplay: PropTypes.object,
  stockSymbolToDisplay: PropTypes.string,
  userDataObject: PropTypes.object
};

const mapStateToProps = store => ({
  stockSymbolToDisplay: store.stockSymbolToDisplay,
  stockDataObjectToDisplay: store.stockDataObjectToDisplay,
  currentUserID: store.currentUserID,
  userDataObject: store.userDataObject,
  searchTerm: store.searchTerm

});
const mapDispatchToProps = dispatch => ({
  addStockPurchaseToUserPortfolio: stockPurchaseDataObject => dispatch(userPortfolio(stockPurchaseDataObject)),
  setUserDataObject: userData => dispatch(userDataObject(userData)),
  setSearchTerm: term => dispatch(searchTerm(term)),
  setStockDataObjectToDisplay: stockData => dispatch(stockDataObjectToDisplay(stockData)),
  fetchStockQuote: symbol => dispatch(fetchStockQuote(symbol)),
  fetchUserData: userID => fetchUserDataHelper(userID)
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SingleStock)
);