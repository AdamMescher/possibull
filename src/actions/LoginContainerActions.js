export const currentUserID = userID => ({
  type: 'CURRENT_USER_ID',
  userID
});

export const userOwnedStocks = userStocksArr => ({
  type: 'SET_USER_OWNED_STOCKS_ARRAY',
  userStocksArr
});

