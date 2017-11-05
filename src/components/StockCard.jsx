import React from 'react';
import iexURL from '../utils/iexURL';
import { fetchStockQuote } from '../utils/fetchHelpers'; 

const StockCard = (props) => {
  return(
    <div className='stockCard-container' 
      onClick={() => {
        props.addStockSymbolToDisplay(props.stock.symbol);
        fetch( `${iexURL}/stock/${props.stock.symbol}/quote` )
        .then( response => response.json() )
        .then( rawStockObject => ({
          name: rawStockObject.companyName,
          symbol: rawStockObject.symbol,
          price: rawStockObject.latestPrice,
          change: rawStockObject.change * 100 + '%'
        }) )
        .then( cleanedObject => props.setStockDataObjectToDisplay(cleanedObject) )
        .then( props.history.push('/stock') )
        
    }} >
      <h3 className='stockCard-title'>{`${props.stock.symbol}`}</h3>
      <p className='stockCard-name' >{`${props.stock.name}`}</p>
    </div>
  )
}

export default StockCard;