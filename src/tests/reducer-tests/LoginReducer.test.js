import * as reducers from '../../reducers/loginReducer';

describe( 'LOGIN REDUCER', () => {
  it('should pass data object', () => {
    const mockUserID = 'GUIbv12tEmVTLQyDFZdkinbxp642';
    const action = {
      type: 'CURRENT_USER_ID',
      userID: mockUserID
    };

    const expectation = action.userID;

    expect( reducers.currentUserID(mockUserID, action ) ).toEqual(expectation);
  });
});
