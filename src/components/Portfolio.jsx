import React, { Component } from 'react';
import Header from './Header';
import firebaseURL from '../utils/firebaseURL';
import firebaseDatabaseSecret from '../utils/firebaseDatabaseSecret';
import PropTypes from 'prop-types';
import StockCard from '../components/StockCard';
import { iexURL } from '../utils/iexURL';

class Portfolio extends Component {
  
  generatePortfolioQuoteStockCards = quotes => {
    return quotes.map( quote => {
      return <StockCard
        key={quote.symbol} 
        stock={quote} 
        history={this.props.history}
        addStockSymbolToDisplay={this.props.addStockSymbolToDisplay} 
        setStockDataObjectToDisplay={this.props.setStockDataObjectToDisplay} 
      />
    })
  }
  
  render(){
    if ( !this.props.portfolioQuotes.length ) {
      this.props.fetchPortfolioQuotes( this.props.userDataObject.portfolio )
    }
    
    return (    
      <div className='portfolio-container'>
        <Header 
          history={this.props.history}
          userID={this.props.currentUserID}
          fetchUserData={this.props.fetchUserData}
          fetchStockQuote={this.props.fetchStockQuote.bind(this)}
          setSearchTerm={this.props.setSearchTerm.bind(this)} 
          setStockDataObjectToDisplay={this.props.setStockDataObjectToDisplay.bind(this)} 
          />
        <section className='portfolio-main-container'>
          <h3>Portfolio</h3>
          <p>{`USER ID: ${this.props.currentUserID}`}</p>
          <p>{`USER PORTFOLIO: ${this.props.userDataObject.portfolio || 'TIME TO BUY SOME STOCKS'}`}</p>
          <p>{`USER NET WORTH: ${this.props.userDataObject.netWorth}`}</p>
          { 
            this.props.portfolioQuotes.length
            ? this.generatePortfolioQuoteStockCards( this.props.portfolioQuotes )
            : null
          }
        </section>
      </div>
    );
  };
};

Portfolio.propTypes = {
  currentUserID: PropTypes.string,
  history: PropTypes.object,
  setUserData: PropTypes.func
}

export default Portfolio;

