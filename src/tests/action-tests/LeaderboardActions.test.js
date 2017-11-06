import { searchTerm } from  '../../actions/LeaderboardActions';

describe( 'LEADERBOARD ACTIONS', () => {
  it('should have an action to set the search term', () => {
    const mockSearchTerm = 'coke';
    const expected = {
      type: 'SET_SEARCH_TERM',
      searchTerm: mockSearchTerm
    };
    const expectation = searchTerm(mockSearchTerm);

    expect(expectation).toEqual(expected);
  });
});
