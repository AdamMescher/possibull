import "babel-polyfill";
import React from 'react';
import fire from 'firebase';
import Search from './Search';
import PropTypes from 'prop-types';

const Header = ({
  history,
  userID,
  fetchUserData,
  fetchStockQuote,
  setSearchTerm,
  setStockDataObjectToDisplay
}) => {
  return (
    <header className='header-container'>
      <section className='header-logo-container'>
        <img
          className='header-logo-icon'
          src={ require( '../assets/icons/icon-bull-logo-electricblue.svg' ) }
          alt='illustration of bull facing to the left' />
        <h1 className='header-logo-text'>possibull</h1>
      </section>
      <nav className='header-nav'>
        <ul className='header-nav-list'>
          <li className='header-nav-list-item'>
            <button
              className="header-nav-list-button"
              onClick={ () => {
                fetchUserData( userID );
                history.push( `/portfolio` );
              }}>
              portfolio
            </button>
          </li>
          <li className='header-nav-list-item'>
            <button
              className="header-nav-list-button"
              onClick={() => {
                history.push('/leaderboard');
              }} >
              leaderboard
            </button>
          </li>
          <li className='header-nav-list-item'>
            <button
              className="header-nav-list-button"
              onClick={ () => {
                fire.auth().signOut()
                  .then( function(){
                    history.push( '/login' );
                  });
              }}>
              logout
            </button>
          </li>
          <Search
            history={history}
            setSearchTerm={setSearchTerm}
            setStockDataObjectToDisplay={setStockDataObjectToDisplay}
            fetchStockQuote ={fetchStockQuote} />
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  history: PropTypes.object,
  userID: PropTypes.string,
  fetchUserData: PropTypes.func,
  fetchStockQuote: PropTypes.func,
  setSearchTerm: PropTypes.func,
  setStockDataObjectToDisplay: PropTypes.func
};

export default Header;
