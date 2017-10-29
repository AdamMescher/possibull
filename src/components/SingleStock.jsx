import React from 'react';
import Search from './Search';
import { fetchStockQuote } from '../utils/fetchHelpers';

const SingleStock = () => {

  const testAppleStockCall = fetchStockQuote('AAPL');
  console.log(testAppleStockCall);

  return(
    <div className='single-stock'>
      <header className='single-stock-header-container'>
        <section className='header-logo-container'>
        <img 
          className='header-logo-icon' 
          src={require('../assets/icons/icon-bull-logo-electricblue.svg')} alt='illustration of bull facing to the left' />
          <h1 className='header-logo-text'>possibull</h1>
        </section>
        <nav className='header-nav'>
          <ul className='header-nav-list'>
            <li className='header-nav-list-item'>portfolio</li>
            <li className='header-nav-list-item'>leaderboard</li>
            <li className='header-nav-list-item'>log out</li>
            <Search />
          </ul>
          
        </nav>
      </header>
      <section className='ss-main'>
        <div>
          <h3>STOCK NAME</h3>
          <p>STOCK PRICE</p>
          <p>STOCK CHANGE</p>
        </div>
      </section>
    </div>
  )
}

export default SingleStock;