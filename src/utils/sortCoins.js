const sortSwitch = (sortOp, data) => {
  switch(sortOp) {
    case "crypto":
      return data.sort(alphabeticalSort);
    case "price":
      return data.sort(priceSort);
    case "marketCap":
      return data.sort(marketCapSort);
    case "24h":
     return data.sort(dayChangeSort);
    default:
      return data;
  }
};

export default sortSwitch;

//useful retrieval for this object structure, bypasses key changes due to different currencies
export const getFirstKey = (obj) => obj[Object.keys(obj)[0]];


//----Sort functions for different columns

//sort coins alphabetically
const alphabeticalSort = (a, b) =>  a.CoinInfo.FullName.localeCompare(b.CoinInfo.FullName);

//sort coins by price
const priceSort = (a, b) =>  getFirstKey(b.RAW).PRICE - getFirstKey(a.RAW).PRICE;

//sort coins by market cap
const marketCapSort = (a, b) =>  getFirstKey(b.RAW).MKTCAP - getFirstKey(a.RAW).MKTCAP;

//sorts coins by 24hr percent change
const dayChangeSort = (a, b) =>  getFirstKey(b.RAW).CHANGEPCT24HOUR - getFirstKey(a.RAW).CHANGEPCT24HOUR;



