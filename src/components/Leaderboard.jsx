import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';

const Leaderboard = ({
  history,
  currentUserID,
  fetchUserData,
  fetchStockQuote,
  setSearchTerm,
  setStockDataObjectToDisplay
}) => {
  return (
    <div className='leaderboard-container'>
      <Header
        history={history}
        userID={currentUserID}
        fetchUserData={fetchUserData.bind(this)}
        fetchStockQuote={fetchStockQuote.bind(this)}
        setSearchTerm={setSearchTerm.bind(this)}
        setStockDataObjectToDisplay={setStockDataObjectToDisplay.bind(this)} />
      <section>
        <h1>LEADERBOARD</h1>
        <p>this is where the scores will go...eventually</p>
      </section>
    </div>
  );
};

Leaderboard.propTypes = {
  history: PropTypes.object,
  currentUserID: PropTypes.string,
  fetchUserData: PropTypes.func,
  fetchStockQuote: PropTypes.func,
  setSearchTerm: PropTypes.func,
  setStockDataObjectToDisplay: PropTypes.func
};

export default Leaderboard;
