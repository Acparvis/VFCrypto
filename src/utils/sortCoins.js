const sortSwitch = (sortOp, data) => {

  switch(sortOp) {
    case "crypto":
      console.log("alphabetise");
      break;
    case "price":
      // code block
      console.log("price");
      break;
    case "marketCap":
      // code block
      console.log("market cap");
      break;
    case "24h":
      // code block
     return dayChange(data);
    default:
    // code block
      return console.log("default");
  }

}

export default sortSwitch;

//useful retrieval for this object structure, bypasses key changes due to different currencies
const getFirstKey = (obj) => obj[Object.keys(obj)[0]];

//sorts coins by 24hr percent change
const dayChangeSort = (a, b) =>  getFirstKey(b.RAW).CHANGEPCT24HOUR - getFirstKey(a.RAW).CHANGEPCT24HOUR;

const dayChange = (coins) => {
  return coins.sort(dayChangeSort);
}