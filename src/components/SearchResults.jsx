import React from 'react';
import Header from '../components/Header';
import { symbols } from '../utils/symbols';
import StockCard from '../components/StockCard';


const SearchResults = (props) => {
  const matchingStocks = symbols.filter(stock => {
    return stock.symbol.toLowerCase().includes(props.searchTerm.toLowerCase()) || stock.name.toLowerCase().includes(props.searchTerm.toLowerCase())
  });

  const mappedMatchingStock = matchingStocks.map( stock => {
      return <StockCard 
                key={stock.symbol}
                stock={stock} 
                history={props.history} 
                addStockSymbolToDisplay={props.addStockSymbolToDisplay}
                setStockDataObjectToDisplay={props.setStockDataObjectToDisplay}/>
    }   )  

  return(
    <div className='searchResults-container'>
      <Header 
        history={props.history}
        setSearchTerm={props.setSearchTerm.bind(this)}
        />
      <section className='searchResults-card-container'>
        {mappedMatchingStock}
      </section>
    </div>
  )
}

export default SearchResults;