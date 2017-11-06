import fire from '../utils/fire';

export const checkAvailableFunds = ( cost, netWorth ) => {
  return netWorth >= cost;
};

export const checkNumberOfShares = ( numberOwned, attemptedSale ) => {
  return numberOwned >= attemptedSale;
};

export const generateNewPortfolio = ( type, currentPortfolio, stockSymbol, purchasedShares, previouslyOwnedShares = 0 ) => {
  return type === 'buy'
    ? {
      ...currentPortfolio,
      [stockSymbol]:
      {
        symbol: stockSymbol,
        numberOfShares: purchasedShares + previouslyOwnedShares
      }
    }
    : {
      ...currentPortfolio,
      [stockSymbol]:
      {
        symbol: stockSymbol,
        numberOfShares: previouslyOwnedShares - purchasedShares
      }
    }
};

export const generateNewNetWorth = ( currentNetWorth, cost, type ) => {
  return type === 'buy'
    ? (parseInt( currentNetWorth, 10 ) - parseInt( cost, 10 )).toFixed(2)
    : (parseInt( currentNetWorth, 10 ) + parseInt( cost, 10 )).toFixed(2)
};

export const generateUpdatedUserObject = (id, portfolio, netWorth) => ({
  id: id,
  portfolio: portfolio,
  netWorth: parseInt( netWorth, 10 )
});

export const setFirebaseObject = ( userID, updatedUserData ) => {
  fire.database().ref(`users`).set({
    [`${userID}`]: updatedUserData
  });
};



