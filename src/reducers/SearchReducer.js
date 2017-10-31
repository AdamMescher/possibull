export const stockSymbolsArray = (state = [], action) => {
  switch (action.type) {
    case 'SET_STOCK_SYMBOLS_ARRAY':
      return action.arrayOfStockSymbols;
    default: 
      return state;
  }
}