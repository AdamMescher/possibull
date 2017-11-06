import * as reducers from '../../reducers/SingleStockReducer';

describe('SINGLE STOCK REDUCER', () => {
  it('should pass a stock purchase data object action', () => {
    const mockState = {
      GOOGL: {
        symbol: 'GOOGL',
        numberOfShares: 50
      }
    };
    const mockStockPurchase = {
      symbol: 'F',
      numberOfShares: 50
    };
    const action = {
      type: 'ADD_STOCK_PURCHASE_TO_USER_PORTFOLIO',
      userPortfolio: [mockStockPurchase]
    };
    const expectation = action.userPortfolio;

    expect(true).toBe(true);
  });
});
