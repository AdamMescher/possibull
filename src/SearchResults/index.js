import "babel-polyfill";
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../Header/';
import StockCard from '../StockCard';
import {
  addStockSymbolToDisplay, 
  stockDataObjectToDisplay } from '../actions';
import { searchTerm } from '../Leaderboard/actions';
import { fetchUserDataHelper, fetchStockQuote } from '../utils/fetchHelpers';
import { symbols } from '../utils/symbols';

const SearchResults = ({
  history,
  currentUserID,
  fetchUserData,
  fetchStockQuote,
  searchTerm,
  setSearchTerm,
  setStockDataObjectToDisplay,
  addStockSymbolToDisplay
}) => {
  const matchingStocks = symbols.filter( stock => {
    return stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
           stock.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  const noMatchingResults = () => {
    return (
      <div className='searchResults-container-none-found'>
        <h2 className='no-matching-results'>
          {`NO STOCKS MATCH THAT SEARCH`}
        </h2>
      </div>
    );
  };
  const mappedMatchingStock = matchingStocks.map( stock => {
    return <StockCard
      key={stock.symbol}
      stock={stock}
      history={history}
      addStockSymbolToDisplay={addStockSymbolToDisplay}
      setStockDataObjectToDisplay={setStockDataObjectToDisplay}/>;
  });
  return (
    <div className='searchResults-container'>
      <Header
        history={history}
        userID={currentUserID}
        fetchUserData={fetchUserData}
        fetchStockQuote={fetchStockQuote}
        setSearchTerm={setSearchTerm.bind(this)}
        setStockDataObjectToDisplay={setStockDataObjectToDisplay.bind(this)} />
      <section className='searchResults-card-container'>
        { matchingStocks.length
          ? mappedMatchingStock
          : noMatchingResults()
        }
      </section>
    </div>
  );
};

SearchResults.propTypes = {
  history: PropTypes.object,
  currentUserID: PropTypes.string,
  fetchUserData: PropTypes.func,
  fetchStockQuote: PropTypes.func,
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
  setStockDataObjectToDisplay: PropTypes.func,
  addStockSymbolToDisplay: PropTypes.func
};

const mapStateToProps = store => ({
  currentUserID: store.currentUserID,
  searchTerm: store.searchTerm,
  stockSymbolToDisplay: store.stockSymbolToDisplay,
  stockDataObjectToDisplay: store.StockDateObjectToDisplay
});
  
const mapDispatchToProps = dispatch => ({
  fetchUserData: userID => fetchUserDataHelper(userID),
  fetchStockQuote: symbol => dispatch(fetchStockQuote(symbol)),
  addStockSymbolToDisplay: stockSymbol => dispatch(
    addStockSymbolToDisplay(stockSymbol)),
  setSearchTerm: term => dispatch( searchTerm(term)),
  setStockDataObjectToDisplay: stockData => dispatch(
    stockDataObjectToDisplay(stockData))
});
  
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchResults)
);


