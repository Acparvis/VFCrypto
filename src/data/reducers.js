import initial from "./initial";
import { //Imports the actions to be fed into the reducer switch statement.
  UPDATE_COINS,
  SORT_COINS
} from "./actions/state";

const updateCoins = (state, {value, currency}) => state.set("coins", value).set("currency", currency).set("loading", false);

const sortCoins = (state, {column}) => state.set("sortOnColumn", column);

// Reducer switch statement.
export default (state = initial, action) => {
  switch (action.type) {
    case UPDATE_COINS:
      return updateCoins(state, action);
    case SORT_COINS:
      return sortCoins(state, action);
    default:
      return state;
  }
};