import {
  userOwnedStocks,
  userDataObject,
  portfolioQuotes,
  combinedStockCurrentValue } from './actions';
  
describe('PORTFOLIO ACTIONS', () => {
  it(`should return an array of user owned stocks action`, () => {
    const mockUserOwnedStocks = [
      { symbol: 'TSLA', numberOfShares: 5 },
      { symbol: 'NFLX', numberOfShares: 10 }
    ];
    const expected = {
      type: 'SET_USER_OWNED_STOCKS_ARRAY',
      userStocksArr: mockUserOwnedStocks
    };
    const expectation = userOwnedStocks(mockUserOwnedStocks);
  
    expect(expectation).toEqual(expected);
  });
  it(`should return user data object action`, () => {
    const mockUserData = {
      id: 'GUIbv12tEmVTLQyDFZdkinbxp642',
      netWorth: 1000000,
      userPortfolio: { TSLA: {symbol: 'TSLA', numberOfShares: 5} }
    };
    const expected = {
      type: 'SET_USER_DATA',
      userDataObject: mockUserData
    };
    const expectation = userDataObject(mockUserData);
  
    expect(expectation).toEqual(expected);
  });
  it(`should return array of stock portfolio quote objects action`, () => {
    const mockPortfolioQuotes = [
      {
        symbol: 'TSLA',
        companyName: 'TESLA, Inc.',
        sector: 'automotive, solar',
        latestPrice: 306.09,
        marketCap: 51.08
      },
      {
        symbol: 'NFLX',
        companyName: 'Netflix, Inc.',
        sector: 'entertainment',
        latestPrice: 200.01,
        marketCap: 86.55
      }
    ];
    const expected = {
      type: 'SET_PORTFOLIO_QUOTES',
      quotes: mockPortfolioQuotes
    };
    const expectation = portfolioQuotes(mockPortfolioQuotes);
  
    expect(expectation).toEqual(expected);
  });
  it(`should return current value of all stocks in portfolio action`, () => {
  
    const mockStocksValue = 15783.43;
    const expected = {
      type: 'SET_STOCKS_CURRENT_VALUE',
      stocksValue: mockStocksValue
    };
    const expectation = combinedStockCurrentValue(mockStocksValue);
  
    expect(expectation).toEqual(expected);
  });
});