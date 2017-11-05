import React, { Component } from 'react';
import Header from './Header';
import iexURL from '../utils/iexURL';
import fire from 'firebase';

class SingleStock extends Component {
  constructor(props){
    super(props);
    this.state = {
      numberOfShares: 0
    }
  }

  componentDidMount(){
    this.props.fetchStockQuote( this.props.stockSymbolToDisplay )
  }

  generateStockPurchaseData = stock => ({
    symbol: stock.symbol,
    price: stock.price,
    numberOfShares: this.state.numberOfShares,
    cost: this.state.numberOfShares * stock.price.toFixed(2)
  });

  generateUpdatedUserObject = (userID, portfolio, netWorth) => {
    this.props.setUserDataObject({
      id: userID,
      portfolio: portfolio,
      netWorth: netWorth.toFixed(2)
    })
  }

  checkAvailableFunds = (cost, netWorth) => {
    return netWorth >= cost
  }

  checkNumberOfShares = (numberOwned, attemptedSale) => {
    return numberOwned >= attemptedSale
  }

  sendUserObjectToFirebase = userObject => {
    fire.database().ref(`users/${this.props.currentUserID}`).set({
      userObject
    })
  }

  createNewEntryInPortfolio = transactionData => {
    if( this.checkAvailableFunds( transactionData.cost, this.props.userDataObject.netWorth ) ) { 
      this.props.setUserDataObject({
        id: this.props.currentUserID,
        portfolio: {
          ...this.props.userDataObject.portfolio,
          [this.props.stockDataObjectToDisplay.symbol]:
          {
            symbol: this.props.stockDataObjectToDisplay.symbol,
            numberOfShares: parseInt(transactionData.numberOfShares)
          }
        },
        netWorth: (this.props.userDataObject.netWorth - transactionData.cost).toFixed(2)
      })
      
      fire.database().ref(`users/${this.props.currentUserID}`).set({
        id: this.props.currentUserID,
        portfolio: {
          ...this.props.userDataObject.portfolio,
          [this.props.stockDataObjectToDisplay.symbol]:
          {
            symbol: this.props.stockDataObjectToDisplay.symbol,
            numberOfShares: parseInt(transactionData.numberOfShares)
          }
        },
        netWorth: (this.props.userDataObject.netWorth - transactionData.cost.toFixed(2))
      })

    } else {
      alert(`you don't have enough money to do that`)
    }
  }

  buyUpdateExistingEntryInPortfolio = transactionData => {
    if (this.checkAvailableFunds(transactionData.cost, this.props.userDataObject.netWorth) ){
      this.props.setUserDataObject({
        id: this.props.currentUserID,
        portfolio: {
          ...this.props.userDataObject.portfolio,
          [this.props.stockDataObjectToDisplay.symbol]: {
            symbol: this.props.stockDataObjectToDisplay.symbol,
            numberOfShares: 
              parseInt(this.state.numberOfShares) 
              + parseInt(this.props.userDataObject.portfolio[this.props.stockDataObjectToDisplay.symbol].numberOfShares)
          }
        },
        netWorth: (this.props.userDataObject.netWorth - transactionData.cost.toFixed(2))
      })

      fire.database().ref(`users/${this.props.currentUserID}`).set({
        id: this.props.currentUserID,
        portfolio: {
          ...this.props.userDataObject.portfolio,
          [this.props.stockDataObjectToDisplay.symbol]:
          {
            symbol: this.props.stockDataObjectToDisplay.symbol,
            numberOfShares: 
              parseInt(transactionData.numberOfShares) 
              + parseInt(this.props.userDataObject.portfolio[this.props.stockDataObjectToDisplay.symbol].numberOfShares)
          }
        },
        netWorth: (this.props.userDataObject.netWorth - transactionData.cost.toFixed(2))
      })
    }
    else {
      alert(`you don't have enough money to do that`)
    }
  }

  sellUpdateExistingEntryInPortfolio = transactionData => {
    if (this.checkNumberOfShares(this.props.userDataObject.portfolio[transactionData.symbol].numberOfShares, transactionData.numberOfShares ) ){
      this.props.setUserDataObject({
        id: this.props.currentUserID,
        portfolio: {
          ...this.props.userDataObject.portfolio,
          [this.props.stockDataObjectToDisplay.symbol]: {
            symbol: this.props.stockDataObjectToDisplay.symbol,
            numberOfShares: 
              parseInt(this.props.userDataObject.portfolio[this.props.stockDataObjectToDisplay.symbol].numberOfShares) 
              - parseInt(this.state.numberOfShares)
          }
        },
        netWorth: (this.props.userDataObject.netWorth + transactionData.cost).toFixed(2)
      })
 
      if (
        parseInt(this.props.userDataObject.portfolio[this.props.stockDataObjectToDisplay.symbol].numberOfShares) - 
        parseInt(this.state.numberOfShares) > 0 
      ) {
          fire.database().ref(`users/${this.props.currentUserID}`).set({
            id: this.props.currentUserID,
            portfolio: {
              ...this.props.userDataObject.portfolio,
              [this.props.stockDataObjectToDisplay.symbol]: {
                symbol: this.props.stockDataObjectToDisplay.symbol,
                numberOfShares: 
                  parseInt(this.props.userDataObject.portfolio[this.props.stockDataObjectToDisplay.symbol].numberOfShares) - 
                  parseInt(this.state.numberOfShares)
              }
            },
            netWorth: (this.props.userDataObject.netWorth + transactionData.cost).toFixed(2)
          })
      } else {
        fire.database().ref(`users/${this.props.currentUserID}`).set({
          id: this.props.currentUserID,
          portfolio: {
            ...this.props.userDataObject.portfolio,
            [this.props.stockDataObjectToDisplay.symbol]: {
              symbol: this.props.stockDataObjectToDisplay.symbol,
              numberOfShares: 
                parseInt(this.props.userDataObject.portfolio[this.props.stockDataObjectToDisplay.symbol].numberOfShares) - 
                parseInt(this.state.numberOfShares)
            }
          },
          netWorth: (this.props.userDataObject.netWorth + transactionData.cost).toFixed(2)
        })
      }
    } else {
      alert(`you don't have that many shares to sell`)
    }
  }

  handleBuyButtonClick = () => {
    !this.props.userDataObject.portfolio || 
     this.props.userDataObject.portfolio[this.props.stockDataObjectToDisplay.symbol]
      ? this.createNewEntryInPortfolio(
          this.generateStockPurchaseData( this.props.stockDataObjectToDisplay )
        )
      : this.createNewEntryInPortfolio(
          this.generateStockPurchaseData( this.props.stockDataObjectToDisplay )
        )
  }

  handleSellButtonClick = () => {
    this.sellUpdateExistingEntryInPortfolio(
      this.generateStockPurchaseData( this.props.stockDataObjectToDisplay )
    )
  }

  handleChange(key, event){
    this.setState({
      [key]: event.target.value
    })
  }

  render(){
    return (
      <div className='single-stock-container'>
        <Header 
          history={this.props.history}
          setSearchTerm={this.props.setSearchTerm.bind(this)}
          setStockDataObjectToDisplay={this.props.setStockDataObjectToDisplay.bind(this)} /> 
        <section className='ss-main'>
          <div>
            <h3>{`STOCK SYMBOL: ${this.props.stockDataObjectToDisplay.symbol}`}</h3>
            <p>{`STOCK NAME: ${this.props.stockDataObjectToDisplay.companyName}`}</p>
            <p>{`STOCK PRICE: ${this.props.stockDataObjectToDisplay.latestPrice}`}</p>
            <p>{`STOCK CHANGE: ${ (this.props.stockDataObjectToDisplay.changePercent * 100).toFixed(2) + ' %'}`}</p>
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
    )
  }
}

export default SingleStock;