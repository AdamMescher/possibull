import * as reducers from '../../reducers/SearchReducer';

describe('SEARCH REDUCER', () => {
  it('should pass a search term action', () => {
    const mockSearchTerm = 'tsla';
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
