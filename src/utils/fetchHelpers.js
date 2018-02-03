import {
  userDataObject,
  portfolioQuotes,
  combinedStockCurrentValue } from '../Portfolio/actions';
import { iexURL } from './iexURL';
import firebaseDatabaseSecret from './firebaseDatabaseSecret';
import { stockDataObjectToDisplay } from '../SearchResults/actions';

export const fetchStockQuote = symbol => dispatch => {
  if (!symbol) { return; }

  return fetch(`${iexURL}/stock/${symbol}/quote`)
    .then(res => res.json())
    .then(res => cleanStockQuoteData(res))
    .then(res => dispatch(stockDataObjectToDisplay(res)));
};

export const fetchPortfolioQuotesHelper = portfolio => dispatch => {
  if (!portfolio) { return; }

  const stockQuotes = Object.keys(portfolio).map(symbol => {
    return fetch(`${iexURL}/stock/${symbol}/quote`)
      .then(res => res.json());
  });

  Promise.all(stockQuotes)
    .then(res => {
      dispatch(portfolioQuotes(res));
      dispatch(
        combinedStockCurrentValue(calculateStockValue(res, portfolio))
      );
    });
};

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

const calculateStockValue =
(quotes, portfolio) => quotes.reduce((acc, quote) => {
  return acc += quote.latestPrice * portfolio[quote.symbol].numberOfShares;
}, 0);

export const fetchUserDataHelper = userID => dispatch => {
  const firebaseURL = 'https://possibull-5f513.firebaseio.com';
  if (!userID) { return; }
  return fetch(
    `${firebaseURL}/users/${userID}.json?auth=${firebaseDatabaseSecret}`
  )
    .then(res => res.json())
    .then(res => dispatch(userDataObject(res)))
    .catch(error => alert(error));
};
