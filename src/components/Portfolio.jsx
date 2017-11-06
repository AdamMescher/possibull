import "babel-polyfill";
import React from 'react';
import Header from './Header';
import StockCard from '../components/StockCard';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

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
  }

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
          <p className='pmc-cash'>{`cash: $${userDataObject.netWorth}`}</p>
          <p className='pmc-portfolio-value' >{`portfolio value: $${combinedStockCurrentValue}`}</p>
          <p className='pmc-total-value'>{`new worth: $${userDataObject.netWorth + combinedStockCurrentValue}`}</p>
        </article>
        <article className='stock-card-container'>
          {
            portfolioQuotes.length
              ? generatePortfolioQuoteStockCards(portfolioQuotes)
              : null
          }
        </article>
        <button
          className="ss-button-update-portfolio"
          onClick={() => {
            fetchPortfolioQuotes(userDataObject.portfolio);

          }}>
          UPDATE USER PORFOLIO
        </button>
      </section>
    </div>
  );
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
