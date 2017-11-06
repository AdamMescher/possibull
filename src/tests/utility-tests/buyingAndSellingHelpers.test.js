import {
  checkAvailableFunds,
  checkNumberOfShares,
  generateNewPortfolio,
  generateNewNetWorth,
  generateUpdatedUserObject } from '../../utils/buyingAndSellingHelpers';

describe('BUYING AND SELLING HELPERS UTILITY', () => {
  it('should return true if cash on hand is greater than cost', () => {
    const cost = 100;
    const enoughCash = 110;
    const notEnoughCash = 90;

    expect(checkAvailableFunds(cost, enoughCash)).toBe(true);
    expect(checkAvailableFunds(cost, notEnoughCash)).toBe(false);
  });
  it('should return true if shares owned'
  + ' is greater than purchase number', () => {
    const attemptedSale = 100;
    const enoughSharesToSell = 110;
    const notEnoughSharesToSell = 90;

    expect(
      checkNumberOfShares(enoughSharesToSell, attemptedSale))
      .toBe(true);
    expect(
      checkNumberOfShares(notEnoughSharesToSell, attemptedSale))
      .toBe(false);
  });

  it('should generate a new portfolio object', () => {
    const type = 'buy';
    const currentPortfolio = { TSLA: {symbol: 'TSLA'}, numberOfShares: 5 };
    const stockSymbol = 'GOOGL';
    const purchasedShares = 50;
    const previouslyOwnedShares = 0;

    const expectation = generateNewPortfolio(
      type,
      currentPortfolio,
      stockSymbol,
      purchasedShares,
      previouslyOwnedShares
    );

    const expected =
    {
      "GOOGL": {"numberOfShares": 50, "symbol": "GOOGL"},
      "TSLA": {"symbol": "TSLA"}, "numberOfShares": 5
    };

    expect(expectation).toEqual(expected);
  });

  it('should geneate updated user net worth', () => {
    const currentNetWorth = 1000;
    const cost = 50;
    const type = 'buy';

    const expectation = parseInt(
      generateNewNetWorth( currentNetWorth, cost, type ));
    const expected = 950.00;

    expect(expectation).toEqual(expected);
  });

  it('should generate updated user object', () => {
    const id = 'thisisauserid';
    const portfolio = {};
    const netWorth = 1500;

    const expectation = generateUpdatedUserObject(id, portfolio, netWorth);
    const expected = {"id": "thisisauserid", "netWorth": 1500, "portfolio": {}};

    expect(expectation).toEqual(expected);
  });
});
