export const currentUserID = (userID) => ({
  type: 'CURRENT_USER_ID',
  userID
});

export const setCurrentUserID = (userID) => ({
  type: 'SET_CURRENT_USER_ID',
  userID
})
