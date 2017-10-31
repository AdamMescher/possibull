export const currentUserID = (state = '', action) => {
  switch ( action.type ) {
  case 'CURRENT_USER_ID':
    return action.userID;
  default:
    return state;
  }
};

