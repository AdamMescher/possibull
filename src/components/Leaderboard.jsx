import React from 'react';
import Header from './Header';

const Leaderboard = ({
  history,
  setSearchTerm,
  setStockDataObjectToDisplay
}) => {
  return (
    <div className='leaderboard-container'>
      <Header 
        history={history}
        setSearchTerm={setSearchTerm.bind(this)} 
        setStockDataObjectToDisplay={setStockDataObjectToDisplay.bind(this)} />
      <section>
      <h1>LEADERBOARD</h1>
      <p>this is where the scores will go...eventually</p>
      </section>
    </div>
  )
}

export default Leaderboard;
