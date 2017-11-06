export const currentUserID = (state = '', action) => {
  switch ( action.type ) {
  case 'CURRENT_USER_ID':
    return action.userID;
  default:
    return state;
  }
};

export const userOwnedStocks = ( state = [], action ) => {
  switch ( action.type ) {
    case 'SET_USER_OWNED_STOCKS_ARRAY':
      return action.userStocksArr;
    default:
      return state;
  }
}