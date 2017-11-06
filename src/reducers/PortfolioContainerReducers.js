export const userOwnedStocks = ( state = [], action ) => {
  switch ( action.type ) {
    case 'SET_USER_OWNED_STOCKS_ARRAY':
      return action.userStocksArr;
    default: 
      return state;
  }
}

export const userDataObject = ( state = {}, action ) => {
  switch ( action.type ) {
    case 'SET_USER_DATA':
      return action.userDataObject;
    default:
      return state;
  }
}

export const portfolioQuotes = ( state = [], action ) => {
  switch ( action.type ) {
    case 'SET_PORTFOLIO_QUOTES':
      return action.quotes;
    default:
      return state;
  }
}

export const combinedStockCurrentValue = ( state = 0, action ) => {
  switch ( action.type ) {
    case 'SET_STOCKS_CURRENT_VALUE':
      return action.stocksValue;
    default:
      return state;
  }
}