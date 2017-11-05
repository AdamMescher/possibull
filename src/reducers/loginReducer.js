export const currentUserID = (state = '', action) => {
  switch ( action.type ) {
  case 'CURRENT_USER_ID':
    return action.userID;
  default:
    return state;
  }
};

export const userDataObject = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return action.userDataObject;
    default:
      return state;
  }
}