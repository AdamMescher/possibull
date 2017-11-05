import { userData } from '../../actions/PortfolioContainerActions';

describe ( 'PORTFOLIO CONTAINER ACTIONS', () => {
  it( 'should return user data object', () => {
    const mockUserData = {
      id: 'GUIbv12tEmVTLQyDFZdkinbxp642',
      netWorth: 1000000,
      userPortfolio: { TSLA: {symbol: 'TSLA', numShares: 5} }
    }
    const expected = {
      type: 'SET_USER_DATA',
      userData: mockUserData
    };
    const expectation = userData(mockUserData);

    expect(expectation).toEqual(expected);
  });
});