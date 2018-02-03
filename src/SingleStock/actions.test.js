import { userPortfolio } from  './actions';

describe('SINGLE STOCK ACTIONS', () => {
  it('should return a user porfolio action', () => {
    const mockStockPurchase = {
      symbol: 'F',
      numberOfShares: 50
    };
    const expected = {
      type: 'ADD_STOCK_PURCHASE_TO_USER_PORTFOLIO',
      stockPurchaseObject: mockStockPurchase
    };
    const expectation = userPortfolio(mockStockPurchase);

    expect(expectation).toEqual(expected);
  });
});