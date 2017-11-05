import * as reducers from '../../reducers/loginReducer';

describe( 'LOGIN REDUCER', () => {
  it('should pass data object', () => {
    const action = {
      type: 'CURRENT_USER_ID',
      userID: 'GUIbv12tEmVTLQyDFZdkinbxp642'
    };
    const expectation = action.userID;

    expect( reducers.currentUserID( '', action ) ).toEqual(expectation)
  });
});