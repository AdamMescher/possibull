export const stockSymbolToDisplay = (state = '', action) => {
  switch (action.type) {
  case 'SET_STOCK_SYMBOL_TO_DISPLAY':
    return action.stockSymbol;
  default:
    return state;
  }
};

export const stockDataObjectToDisplay = (state = {}, action) => {
  switch (action.type) {
  case 'SET_STOCK_DATA_OBJECT_TO_DISPLAY':
    return action.stockDataObject;
  default:
    return state;
  }
};