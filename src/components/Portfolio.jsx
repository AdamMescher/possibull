import React from 'react';
import Header from './Header';
import firebaseURL from '../utils/firebaseURL';
import firebaseDatabaseSecret from '../utils/firebaseDatabaseSecret';
import PropTypes from 'prop-types';
import { userDataObject } from '../actions/PortfolioContainerActions';
import StockCard from '../components/SingleStock';

const Portfolio = ({
  currentUserID,
  history,
  userDataObject,
  setUserData,
  setSearchTerm
}) => {

  

  if(!Object.keys(userDataObject).length){
    setUserData({
      id: currentUserID,
      netWorth: 1000000,
      portfolio: null
    }) 
  }

  if(userDataObject.portfolio){
    Object.keys( userDataObject.portfolio ).map( stock => console.log(stock) )
  }


  return (    
    <div className='portfolio-container'>
      <Header 
        history={history}
        setSearchTerm={setSearchTerm.bind(this)} />
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
  history: PropTypes.func,
  setUserData: PropTypes.func
}

export default Portfolio;

