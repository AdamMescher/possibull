import React from 'react';
import iexURL from '../utils/iexURL';
import PropTypes from 'prop-types';

const StockCard = ({
  stock,
  history,
  addStockSymbolToDisplay
}) => {
  return(
    <div 
      className='stockCard-container' 
      onClick={
        () => {
          addStockSymbolToDisplay(stock.symbol);
          history.push('/stock')
        }
    }>
      <h3 className='stockCard-title'>{`${stock.symbol}`}</h3>
      <p className='stockCard-name' >{`${stock.name}`}</p>
    </div>
  )
}

StockCard.propTypes = {
  stock: PropTypes.object,
  history: PropTypes.func,
  addStockSymbolToDisplay: PropTypes.func
}

export default StockCard;