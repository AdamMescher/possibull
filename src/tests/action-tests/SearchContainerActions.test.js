import { searchTerm } from '../../actions/SearchContainerActions';

describe('SEARCH CONTAINER ACTIONS', () => {
  it('should have an action to set the search term', () => {
    const mockSearchTerm = 'tsla';
    const expected = {
      type: 'SET_SEARCH_TERM',
      searchTerm: mockSearchTerm
    };
    const expectation = searchTerm(mockSearchTerm);

    expect(expectation).toEqual(expected);
  });
});
