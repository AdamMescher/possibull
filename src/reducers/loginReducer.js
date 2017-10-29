export const currentUserID = (state = '', action) => {
  switch(action.type){
    case 'CURRENT_USER_ID':
      return action.userID;
    default:
      return state;
  }
}

export const setCurrentUserID = (state = '', action) => {
  switch(action.type){
    case 'SET_CURRENT_USER_ID':
      return action.userID;
    default: 
      return state;
  }
}