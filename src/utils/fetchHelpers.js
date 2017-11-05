// import { userDataObject } from '../actions/PortfolioContainerActions';
import iexURL from './iexURL';
import { firebaseURL } from './firebaseURL';
import firebaseDatabaseSecret from './firebaseDatabaseSecret';
import { userDataObject } from '../actions/LoginContainerActions';
import { stockDataObjectToDisplay } from '../actions/SearchResultsActions';

export const fetchStockQuote = stockSymbol => dispatch => {
  return fetch( `${iexURL}/stock/${stockSymbol}/quote` )
    .then( res => res.json() )
    .then( res => cleanStockQuoteData( res ) )
    .then( res => dispatch( stockDataObjectToDisplay( res ) ) ) 
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

export const fetchUserData = userID => dispatch => {
  return fetch(`${firebaseURL}/users/${userID}.json?auth=${firebaseDatabaseSecret}`)
  .then( res => res.json() )
  .then( res => dispatch( userDataObject( res ) ) )
  .catch( error => alert(error) )
}