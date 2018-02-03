export const userOwnedStocks = userStocksArr => ({
  type: 'SET_USER_OWNED_STOCKS_ARRAY',
  userStocksArr
});
  
export const userDataObject = userDataObject => ({
  type: 'SET_USER_DATA',
  userDataObject
});
  
export const portfolioQuotes = quotes => ({
  type: 'SET_PORTFOLIO_QUOTES',
  quotes
});
  
export const combinedStockCurrentValue = stocksValue => ({
  type: 'SET_STOCKS_CURRENT_VALUE',
  stocksValue
});