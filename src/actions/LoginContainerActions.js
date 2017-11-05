export const currentUserID = (userID) => ({
  type: 'CURRENT_USER_ID',
  userID
});

export const userDataObject = userDataObject => ({
  type: 'SET_USER_DATA',
  userDataObject
});