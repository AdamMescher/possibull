import * as reducers from '../../reducers/LeaderboardReducer';

describe('LEADERBOARD REDUCER', () => {
  it('should pass a search term action', () => {
    const mockSearchTerm = 'coke';
    const action = {
      type: 'SET_SEARCH_TERM',
      searchTerm: mockSearchTerm
    };
    const expectation = action.searchTerm;

    expect(
      reducers.searchTerm(mockSearchTerm, action))
      .toEqual(expectation);
  });
});
