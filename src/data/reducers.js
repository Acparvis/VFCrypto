import initial from "./initial";
import {Map, fromJS, toJS} from 'immutable';
import { //Imports the actions to be fed into the reducer switch statement.
  UPDATE_COINS,
  SORT_COINS
} from "./actions/state"
import sortSwitch from "../utils/sortCoins";

const updateCoins = (state, {value}) => state.set("coins", value);

const sortCoins = (state, {column}) => state.update('coins', c => {
    // return p.push(Map({
    //   id: index + 1,
    //   value: value
    // }))

    const coins = state.get("coins");

    const newState = state.set("coins", sortSwitch(column, coins))

    return c = sortSwitch(column, coins);
  });

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