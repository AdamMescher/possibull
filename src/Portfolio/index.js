import "babel-polyfill";
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../Header';
import StockCard from '../StockCard';
import { searchTerm } from '../Leaderboard/actions';
import { 
  stockDataObjectToDisplay, 
  addStockSymbolToDisplay } from '../SearchResults/actions';
import { userOwnedStocks } from '../Login/actions';
import { userDataObject } from '../Portfolio/actions';
import { 
  fetchUserDataHelper, 
  fetchStockQuote, 
  fetchPortfolioQuotesHelper } from '../utils/fetchHelpers';

const Portfolio = ({
  addStockSymbolToDisplay,
  combinedStockCurrentValue,
  currentUserID,
  fetchPortfolioQuotes,
  fetchStockQuote,
  fetchUserData,
  history,
  portfolioQuotes,
  searchTerm,
  setSearchTerm,
  setStockDataObjectToDisplay,
  setUserData,
  setUserOwnedStocks,
  stockSymbolToDisplay,
  userDataObject,
  userOwnedStocks
}) => {

  if (!portfolioQuotes.length && userDataObject) {
    fetchPortfolioQuotes(userDataObject.portfolio);
  }

  const generatePortfolioQuoteStockCards = quotes => {
    return quotes.map( quote => {
      return <StockCard
        id='portfolio-card'
        key={quote.symbol}
        stock={quote}
        history={history}
        addStockSymbolToDisplay={addStockSymbolToDisplay}
        setStockDataObjectToDisplay={setStockDataObjectToDisplay}
        sharesOwned={
          userDataObject.portfolio[quote.symbol].numberOfShares
        }
      />;
    });
  };

  return (
    <div className='portfolio-container'>
      <Header
        history={history}
        userID={currentUserID}
        fetchUserData={fetchUserData}
        fetchStockQuote={fetchStockQuote.bind(this)}
        setSearchTerm={setSearchTerm.bind(this)}
        setStockDataObjectToDisplay={
          setStockDataObjectToDisplay.bind(this)
        }/>
      <section className='portfolio-main-container'>
        <article className='portfolio-numbers-container'>
          <p className='pmc-cash'>{`cash $${userDataObject.netWorth}`}</p>
          <p className='pmc-total-value'>
            {`$${userDataObject.netWorth + combinedStockCurrentValue}`}
          </p>
          <p className='pmc-portfolio-value' >
            {`portfolio $${parseInt(combinedStockCurrentValue).toFixed(2)}`}
          </p>
        </article>
        <article className='stock-card-container'>
          {
            portfolioQuotes.length
              ? generatePortfolioQuoteStockCards(portfolioQuotes)
              : null
          }
        </article>
        <button
          className="portfolio-button-update"
          onClick={() => {
            fetchPortfolioQuotes(userDataObject.portfolio);
          }}>
          UPDATE USER PORFOLIO
        </button>
      </section>
    </div>
  );
};

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

const mapStateToProps = store => ({
  currentUserID: store.currentUserID,
  userDataObject: store.userDataObject,
  searchTerm: store.searchTerm,
  userOwnedStocks: store.userOwnedStocks,
  portfolioQuotes: store.portfolioQuotes,
  stockSymbolToDisplay: store.stockSymbolToDisplay,
  combinedStockCurrentValue: store.combinedStockCurrentValue
});
  
const mapDispatchToProps = dispatch => ({
  fetchUserData: userID => dispatch( fetchUserDataHelper( userID ) ),
  fetchStockQuote: symbol => dispatch( fetchStockQuote( symbol ) ),
  setUserData: userData => dispatch( userDataObject( userData ) ),
  setSearchTerm: term => dispatch( searchTerm( term ) ),
  setStockDataObjectToDisplay: stockData => dispatch(
    stockDataObjectToDisplay( stockData )
  ),
  setUserOwnedStocks: stocks => dispatch( userOwnedStocks( stocks ) ),
  fetchPortfolioQuotes: portfolio => dispatch(
    fetchPortfolioQuotesHelper( portfolio )
  ),
  addStockSymbolToDisplay: stockSymbol => dispatch(
    addStockSymbolToDisplay(stockSymbol)
  )
});
  
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Portfolio)
);