import {
  addStockSymbolToDisplay,
  stockDataObjectToDisplay
} from '../../actions/SearchResultsActions';

describe('SEARCH RESULTS ACTIONS', () => {
  it('should have an action to set stock symbol to display', () => {
    const mockStockSymbol = 'GOOGL';
    const expected = {
      type: 'SET_STOCK_SYMBOL_TO_DISPLAY',
      stockSymbol: mockStockSymbol
    };
    const expectation = addStockSymbolToDisplay(mockStockSymbol);

    expect(expectation).toEqual(expected);
  });
  it('should have an action to set stock data object to display', () => {
    const mockStockDataObject = {
      symbol: 'TSLA',
      companyName: 'Tesla, Inc.'
    };
    const expected = {
      type: 'SET_STOCK_DATA_OBJECT_TO_DISPLAY',
      stockDataObject: mockStockDataObject
    };
    const expectation = stockDataObjectToDisplay(mockStockDataObject);

    expect(expectation).toEqual(expected);
  });
});
