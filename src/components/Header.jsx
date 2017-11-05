import React from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

const Header = (props) => {
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
              className="header-nav-list-link"
              onClick={ () => {
                props.history.push(`/portfolio`)
              }}>
              portfolio 
            </button>
          </li>
          <li className='header-nav-list-item'>
            <button 
              onClick={() => {
                props.history.push('/leaderboard')
              }}
              className="header-nav-list-link">
              leaderboard
            </button>
          </li>
          <li className='header-nav-list-item'>
            <button
              onClick={ () => {
                firebase.auth().signOut().then( function(){
                  props.history.push('/login')
                })
                
              } }>
              LOGOUT
            </button>
          </li>
          <Search 
            history={props.history}
            setSearchTerm={props.setSearchTerm}/>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
  