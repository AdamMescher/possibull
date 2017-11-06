import "babel-polyfill";
import React from 'react';
import PropTypes from 'prop-types';

const StockCard = ({
  stock,
  history,
  addStockSymbolToDisplay,
  sharesOwned
}) => {
  const generatePortfolioCard = stock => {
    return (
      <div>
        <h3 className='stockCard-title'>{`${stock.symbol}`}</h3>
        <p className='stockCard-name' >
          {`${stock.companyName || stock.name}`}
        </p>
        <p className='stockCard-name' >{`shares owned: ${sharesOwned}`}</p>
        <p className='stockCard-name' >{`sector: ${stock.sector}`}</p>
        <p className='stockCard-name' >{`price: ${stock.latestPrice}`}</p>
        <p className='stockCard-name' >
          {`% change: ${(stock.changePercent * 100).toFixed(2)}%`}
        </p>
        <p className='stockCard-name' >{`mkt cap: ${ (stock.marketCap / 1000000).toFixed(2) } Billion`}</p>
      </div>
    );
  };

  const generateSearchCard = stock => {
    return (
      <div>
        <h3 className='stockCard-title'>{`${stock.symbol}`}</h3>
        <p className='stockCard-name' >
          {`${stock.companyName || stock.name}`}
        </p>
      </div>
    );
  };

  const stockCard = stock.change
    ? generatePortfolioCard( stock )
    : generateSearchCard( stock );

  return (
    <div
      className='stockCard-container'
      onClick={
        () => {
          addStockSymbolToDisplay( stock.symbol );
          history.push( '/stock' );
        }
      }>
      { stockCard }
    </div>
  );
};

StockCard.propTypes = {
  stock: PropTypes.object,
  history: PropTypes.object,
  addStockSymbolToDisplay: PropTypes.func,
  sharesOwned: PropTypes.number
};

export default StockCard;
