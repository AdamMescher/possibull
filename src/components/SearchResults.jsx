import React from 'react';
import Header from '../components/Header';
import { symbols } from '../utils/symbols';
import StockCard from '../components/StockCard';


const SearchResults = ({
  history,
  searchTerm,
  setSearchTerm,
  setStockDataObjectToDisplay,
  addStockSymbolToDisplay
}) => {
  const matchingStocks = symbols.filter( stock => {
    return stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) || stock.name.toLowerCase().includes(searchTerm.toLowerCase())
  });

  const mappedMatchingStock = matchingStocks.map( stock => {
      return <StockCard 
                key={stock.symbol}
                stock={stock} 
                history={history} 
                addStockSymbolToDisplay={addStockSymbolToDisplay} 
                setStockDataObjectToDisplay={setStockDataObjectToDisplay.bind(this)}/>
    }   )  

  return(
    <div className='searchResults-container'>
      <Header 
        history={history}
        setSearchTerm={setSearchTerm.bind(this)}
        setStockDataObjectToDisplay={setStockDataObjectToDisplay.bind(this)} />
      <section className='searchResults-card-container'>
        {mappedMatchingStock}
      </section>
    </div>
  )
}

export default SearchResults;