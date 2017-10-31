import React from 'react';
import { grabUserPortfolio, grab } from '../containers/PortfolioContainer';
import Header from './Header';

// import {
//   fetchStockSymbols, 
//   fetchStockQuote
// } from '../utils/fetchHelpers';

const Portfolio = (props) => {
  props.grabUserPortfolio(props.currentUserID)
  props.grabStockSymbolsArray();
  
  // props.grabStockSymbols();

  return (
    <div className='portfolio-container'>
      <Header arrayOfStockSymbols={props.stockSymbolsArray}/>
      <section className='portfolio-main-container'>
        <h3>Portfolio</h3>
        <p>{`USER ID: ${props.currentUserID}`}</p>
        <p>{`USER PORTFOLIO: ${props.userPortfolio}`}</p>
        <p>{`USER NET WORTH: ${props.userNetWorth}`}</p>
      </section>
    </div>
  );
};

export default Portfolio;