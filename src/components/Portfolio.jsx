import React from 'react';
import Header from './Header';
import firebaseURL from '../utils/firebaseURL';
import firebaseDatabaseSecret from '../utils/firebaseDatabaseSecret';
import PropTypes from 'prop-types';
import { userDataObject } from '../actions/PortfolioContainerActions';
import StockCard from '../components/SingleStock';
import iexURL from '../utils/iexURL';

const Portfolio = ({
  currentUserID,
  history,
  userDataObject,
  setUserData,
  setSearchTerm,
  fetchUserData,
  fetchStockQuote,
  setStockDataObjectToDisplay,
  setUserOwnedStocks,
  userOwnedStocks
}) => 
{
  console.log(  )

    // GENERATE STOCK CARD FOR EACH STOCK WITH QUOTE

    // CALCULATE NET WORTH
  return (    
    <div className='portfolio-container'>
      <Header 
        history={history}
        setSearchTerm={setSearchTerm.bind(this)} 
        setStockDataObjectToDisplay={setStockDataObjectToDisplay.bind(this)} 
        fetchStockQuote={fetchStockQuote.bind(this)}/>
      <section className='portfolio-main-container'>
        <h3>Portfolio</h3>
        <p>{`USER ID: ${currentUserID}`}</p>
        <p>{`USER PORTFOLIO: ${userDataObject.portfolio || 'TIME TO BUY SOME STOCKS'}`}</p>
        <p>{`USER NET WORTH: ${userDataObject.netWorth}`}</p>
      </section>
    </div>
  );
};

Portfolio.propTypes = {
  currentUserID: PropTypes.string,
  history: PropTypes.object,
  setUserData: PropTypes.func
}

export default Portfolio;

