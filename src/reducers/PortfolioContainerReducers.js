export const userOwnedStocks = ( state = [], action ) => {
  switch ( action.type ) {
    case 'SET_USER_OWNED_STOCKS_ARRAY':
      return action.userStocksArr;
    default: 
      return state;
  }
}