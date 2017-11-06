import "babel-polyfill";
import React from 'react';
import { symbols } from '../utils/symbols';
import Header from '../components/Header';
import StockCard from '../components/StockCard';
import PropTypes from 'prop-types';

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
        {mappedMatchingStock}
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

export default SearchResults;
