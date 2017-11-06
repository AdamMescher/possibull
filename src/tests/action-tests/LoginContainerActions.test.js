import {
  currentUserID,
  userOwnedStocks
} from '../../actions/LoginContainerActions';

describe(`LOGIN ACTIONS`, () => {

  it( `should return a current user id action `, () => {
    const mockUserID = 'GUIbv12tEmVTLQyDFZdkinbxp642';
    const expected = {
      type: 'CURRENT_USER_ID',
      userID: mockUserID
    };
    const expectation = currentUserID(mockUserID);

    expect(expectation).toEqual(expected);
  });

  it( `should return a user owned stocks acion`, () => {
    const mockUserStocksArr = [
      {symbol: 'TSLA', numberOfShares: 5},
      {symbol: 'NFLX', numberOfShares: 10}
    ];
    const expected = {
      type: 'SET_USER_OWNED_STOCKS_ARRAY',
      userStocksArr: mockUserStocksArr
    };
    const expectation = userOwnedStocks(mockUserStocksArr);

    expect(expectation).toEqual(expected);
  });
});
