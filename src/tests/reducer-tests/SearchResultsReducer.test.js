import * as reducers from '../../reducers/SearchResultsReducer';

describe('SEARCH RESULTS REDUCER', () => {
  it('should pass a set stock symbol to display action', () => {
    const mockSymbol = 'TSLA';
    const action = {
      type: 'SET_STOCK_SYMBOL_TO_DISPLAY',
      stockSymbol:mockSymbol
    };
    const expectation = action.stockSymbol;

    expect(
      reducers.stockSymbolToDisplay(mockSymbol, action))
      .toEqual(expectation);
  });

  it('should pass a stock data object to display action', () => {
    const mockStockObject = {
      symbol: 'TSLA',
      companyName: 'Tesla, Inc.'
    };
    const action = {
      type: 'SET_STOCK_DATA_OBJECT_TO_DISPLAY',
      stockDataObject: mockStockObject
    };
    const expectation = action.stockDataObject;

    expect(
      reducers.stockDataObjectToDisplay(mockStockObject, action))
      .toEqual(expectation);
  });
});
