import "babel-polyfill";
import React, { Component } from 'react';
import Header from './Header';
import StockCard from '../components/StockCard';
import PropTypes from 'prop-types';

class Portfolio extends Component {

  generatePortfolioQuoteStockCards = quotes => {
    return quotes.map( quote => {
      return <StockCard
        key={quote.symbol}
        stock={quote}
        history={this.props.history}
        addStockSymbolToDisplay={this.props.addStockSymbolToDisplay}
        setStockDataObjectToDisplay={this.props.setStockDataObjectToDisplay}
        sharesOwned={
          this.props.userDataObject.portfolio[quote.symbol].numberOfShares
        }
      />;
    });
  }

  render(){
    if ( !this.props.portfolioQuotes.length && this.props.userDataObject ) {
      this.props.fetchPortfolioQuotes( this.props.userDataObject.portfolio );
    }

    return (
      <div className='portfolio-container'>
        <Header
          history={this.props.history}
          userID={this.props.currentUserID}
          fetchUserData={this.props.fetchUserData}
          fetchStockQuote={this.props.fetchStockQuote.bind(this)}
          setSearchTerm={this.props.setSearchTerm.bind(this)}
          setStockDataObjectToDisplay={
            this.props.setStockDataObjectToDisplay.bind(this)
          }/>
        <section className='portfolio-main-container'>
          <h3>Portfolio</h3>
          <p>{`USER ID: ${this.props.currentUserID}`}</p>
          <p>{`CASH: $${this.props.userDataObject.netWorth}`}</p>
          <p>{`PORTFOLIO VALUE: $${this.props.combinedStockCurrentValue}`}</p>
          {
            this.props.portfolioQuotes.length
              ? this.generatePortfolioQuoteStockCards(
                this.props.portfolioQuotes
              )
              : null
          }
        </section>
      </div>
    );
  }
}

Portfolio.propTypes = {
  addStockSymbolToDisplay: PropTypes.func,
  combinedStockCurrentValue: PropTypes.number,
  currentUserID: PropTypes.string,
  fetchPortfolioQuotes: PropTypes.func,
  fetchStockQuote: PropTypes.func,
  fetchUserData: PropTypes.func,
  history: PropTypes.object,
  portfolioQuotes: PropTypes.array,
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
  setStockDataObjectToDisplay: PropTypes.func,
  setUserData: PropTypes.func,
  setUserOwnedStocks: PropTypes.func,
  stockSymbolToDisplay: PropTypes.string,
  userDataObject: PropTypes.object,
  userOwnedStocks: PropTypes.array
};

export default Portfolio;
