export const stockSymbolsArray = (state = [], action) => {
  switch (action.type) {
  case 'SET_STOCK_SYMBOLS_ARRAY':
    return action.symbols;
  default:
    return state;
  }
};

export const userPortfolio = ( state = [], action ) => {
  switch (action.type) {
  case 'SET_USER_PORTFOLIO_ARRAY':
    return action.portfolio;
  default:
    return state;
  }
};

export const userNetWorth = ( state = 0, action ) => {
  switch (action.type) {
  case 'SET_USER_NET_WORTH':
    return action.netWorth;
  default:
    return state;
  }
}
