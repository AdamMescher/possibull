import iexURL from './iexURL';
import firebaseURL from './firebaseURL';
import firebaseDBSecret from './firebaseDatabaseSecret';

const fetchStockSymbols = () => {
  fetch(`${iexURL}/ref-data/symbols` )
    .then( response => response.json() )
}

export default fetchStockSymbols;

// export const fetchStockQuote = (stockSymbol) => {
//   fetch(`${iexURL}/stock/${stockSymbol}/quote`)
//     .then( response => response.json() )
//     .then( parsed => cleanStockQuoteData(parsed) )
// }

const fetchStockQuote = (stockSymbol) => {
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

 export const getArrayOfStockSymbols = () => {
   fetch(`${firebaseURL}/symbols.json?auth=${firebaseDBSecret}`)
     .then(response => response.json())
     .then(parsed => Object.keys(parsed).map(symbol => parsed[symbol]))
 };

 