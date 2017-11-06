import * as reducers from '../../reducers/loginReducer';

describe( 'LOGIN REDUCER', () => {

  it('should pass data object action', () => {
    const mockUserID = 'GUIbv12tEmVTLQyDFZdkinbxp642';
    const action = {
      type: 'CURRENT_USER_ID',
      userID: mockUserID
    };
    const expectation = action.userID;

    expect(
      reducers.currentUserID(mockUserID, action))
      .toEqual(expectation);
  });

  it('should pass user owned stocks array action', () => {
    const mockUserStocksArr = [
      {symbol: 'TSLA', numberOfShares: 5},
      {symbol: 'NFLX', numberOfShares: 10}
    ];
    const action = {
      type: 'SET_USER_OWNED_STOCKS_ARRAY',
      userStocksArr: mockUserStocksArr
    };
    const expectation = action.userStocksArr;

    expect(
      reducers.userOwnedStocks(mockUserStocksArr, action))
      .toEqual(expectation);
  });
});
