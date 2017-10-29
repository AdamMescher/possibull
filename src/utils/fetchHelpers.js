import iexURL from './iexURL';

export const fetchStockSymbols = () => {
  fetch(`${iexURL}/ref-data/symbols` )
    .then( response => response.json() )
}

// export const fetchStockQuote = (stockSymbol) => {
//   fetch(`${iexURL}/stock/${stockSymbol}/quote`)
//     .then( response => response.json() )
//     .then( parsed => cleanStockQuoteData(parsed) )
// }

export const fetchStockQuote = (stockSymbol) => {
  fetch(`${iexURL}/stock/${stockSymbol}/quote`)
    .then(response => response.json())
    .then(parsed => cleanStockQuoteData(parsed))
}

const cleanStockQuoteData = ({
  symbol,
  companyName,
  sector,
  latestPrice,
  change,
  changePercent,
  marketCap
}) => ({ 
  symbol,
  companyName,
  sector,
  latestPrice,
  change,
  changePercent,
  marketCap
 });