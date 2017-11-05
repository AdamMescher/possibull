export const userDataObject= ( state = {}, action ) => {
  switch(action.type){
    case 'SET_USER_DATA':
      return action.userDataObject;
    default: 
      return state;
  }
}