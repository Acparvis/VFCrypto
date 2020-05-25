import {Map} from "immutable";

// Initial state, overwrite with API data
export default Map({
  coins: [],
  currency: "USD",
  sortOnColumn: "marketCap",
  loading: true
});