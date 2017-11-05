export const addStockSymbolToDisplay = (stockSymbol) => ({
  type: 'SET_STOCK_SYMBOL_TO_DISPLAY',
  stockSymbol
});

export const stockDataObjectToDisplay = (stockDataObject) => ({
  type: 'SET_STOCK_DATA_OBJECT_TO_DISPLAY',
  stockDataObject
});