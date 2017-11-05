import React from 'react';
import Search from './Search';
import firebase from 'firebase';

const Header = ({
  history,
  setSearchTerm,
  fetchStockQuote,
  setStockDataObjectToDisplay
}) => {
  return(
    <header className='header-container'>
      <section className='header-logo-container'>
        <img
          className='header-logo-icon'
          src={require('../assets/icons/icon-bull-logo-electricblue.svg')}
          alt='illustration of bull facing to the left' />
        <h1 className='header-logo-text'>possibull</h1>
      </section>
      <nav className='header-nav'>
        <ul className='header-nav-list'>
          <li className='header-nav-list-item'>
            <button 
              className="header-nav-list-button"
              onClick={ () => {
                history.push(`/portfolio`)
              }}>
              portfolio 
            </button>
          </li>
          <li className='header-nav-list-item'>
            <button 
              className="header-nav-list-button"
              onClick={() => {
                history.push('/leaderboard')
              }} >
              leaderboard
            </button>
          </li>
          <li className='header-nav-list-item'>
            <button
              className="header-nav-list-button"
              onClick={ () => {
                firebase.auth().signOut().then( function(){
                  history.push('/login')
                })
                
              } }>
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
  )
}

export default Header;
  