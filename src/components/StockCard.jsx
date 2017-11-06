import React from 'react';
import PropTypes from 'prop-types';

const StockCard = ({
  stock,
  history,
  addStockSymbolToDisplay,
  setStockDataObjectToDisplay,
  sharesOwned
}) => {

  const generatePortfolioCard = stock => {
    return(
      <div>
        <h3 className='stockCard-title'>{`${stock.symbol}`}</h3>
        <p className='stockCard-name' >{`${stock.companyName || stock.name}`}</p>
        <p className='stockCard-name' >{`SHARES OWNED: ${sharesOwned}`}</p>
        <p className='stockCard-name' >{`${stock.sector}`}</p>
        <p className='stockCard-name' >{`${stock.latestPrice}`}</p>
        <p className='stockCard-name' >{`${(stock.changePercent * 100).toFixed(2)}%`}</p>
        <p className='stockCard-name' >{`${stock.marketCap}`}</p>
      </div>
    )
  }

  const generateSearchCard = stock => {
    return(
      <div>
        <h3 className='stockCard-title'>{`${stock.symbol}`}</h3>
        <p className='stockCard-name' >{`${stock.companyName || stock.name}`}</p>
      </div>
    )
  }

  const stockCard = stock.change
  ? generatePortfolioCard( stock )
  : generateSearchCard( stock )

  return(
    <div 
      className='stockCard-container' 
      onClick={
        () => {
          addStockSymbolToDisplay( stock.symbol );
          history.push( '/stock' )
        }
    }>
      { stockCard }
    </div>
  )
}

StockCard.propTypes = {
  stock: PropTypes.object,
  history: PropTypes.object,
  addStockSymbolToDisplay: PropTypes.func
}

export default StockCard;