import React from 'react';
import {
  fetchStockSymbols, 
  fetchStockQuote
} from '../utils/fetchHelpers';

const Portfolio = () => {

  const allStockSymbols = fetchStockSymbols();
  const testAppleStockCall = fetchStockQuote('AAPL');
  
  return(
    <div>
      HI
    </div>
  )
}

export default Portfolio;