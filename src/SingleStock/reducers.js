export const userPortfolio = ( state = [], action ) => {
  switch ( action.type ) {
  case 'ADD_STOCK_PURCHASE_TO_USER_PORTFOLIO':
    return [...state, action.stockPurchaseObject];
  default:
    return state;
  }
};