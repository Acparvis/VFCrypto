//retrieves a specific coin from the store by its coinId
export const getCoin = (coinId, coins) =>  coins.find(x => x?.CoinInfo?.Name === coinId);

export const getCoinIndex = (coinId, coins) =>  coins.findIndex(x => x?.CoinInfo?.Name === coinId);