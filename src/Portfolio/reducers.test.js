import * as reducers from './reducers';

describe( `PORTFOLIO REDUCER`, () => {
  it(`should pass user owned stocks action`, () => {
    const mockUserStocksArr = [
      { symbol: 'TSLA', numberOfShares: 5 },
      { symbol: 'NFLX', numberOfShares: 10 }
    ];
    const action = {
      type: 'SET_USER_OWNED_STOCKS_ARRAY',
      userStocksArr: mockUserStocksArr
    };
    const expectation = action.userStocksArr;
    expect(
      reducers.userOwnedStocks(mockUserStocksArr, action)
    ).toEqual(expectation);
  });
  it(`should pass user data object action`, () => {
    const mockUserDataObject = {
      id: 'GUIbv12tEmVTLQyDFZdkinbxp642',
      netWorth: 1000000,
      userPortfolio: { TSLA: { symbol: 'TSLA', numberOfShares: 5 } }
    };
    const action = {
      type: 'SET_USER_DATA',
      stocksValue: mockUserDataObject
    };
    const expectation = action.userDataObject;
    expect(
      reducers.userDataObject(mockUserDataObject, action)
    ).toEqual(expectation);
  });
  it(`should pass portfolio quotes action`, () => {
    const mockQuotes = [
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
    const action = {
      types: 'SET_PORTFOLIO_QUOTES',
      portfolioQuotes: mockQuotes
    };
    const expectation = action.portfolioQuotes;
    expect(
      reducers.portfolioQuotes(mockQuotes, action)
    ).toEqual(expectation);
  });
  it(`should pass stocks total value action`, () => {
    const mockStocksValue = 15783.43;
    const action = {
      type: 'SET_STOCKS_CURRENT_VALUE',
      stocksValue: mockStocksValue
    };
    const expectation = action.stocksValue;
    expect(
      reducers.combinedStockCurrentValue(mockStocksValue, action)
    ).toEqual(expectation);
  });
});