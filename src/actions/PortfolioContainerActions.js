export const userPortfolio = ( portfolio ) => ({
  type: 'SET_USER_PORTFOLIO_ARRAY',
  portfolio
});

export const userNetWorth = (netWorth) => ({
  type: 'SET_USER_NET_WORTH',
  netWorth
});

export const stockSymbolsArray = (symbols) => ({
  type: 'SET_STOCK_SYMBOLS_ARRAY',
  symbols
});