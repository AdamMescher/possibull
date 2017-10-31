import React from 'react';
import Header from './Header';
// import Search from './Search';
// import { fetchStockQuote } from '../utils/fetchHelpers';

const SingleStock = () => {

  // const testAppleStockCall = fetchStockQuote('AAPL');
  // console.log(testAppleStockCall);

  return (
    <div>
      <Header />
      <section className='ss-main'>
        <div>
          <h3>STOCK SYMBOL: </h3>
          <p>STOCK NAME: </p>
          <p>STOCK PRICE: </p>
          <p>STOCK CHANGE: </p>
        </div>
      </section>
    </div>
  );
};

export default SingleStock;