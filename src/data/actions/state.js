export const UPDATE_COINS = Symbol("UPDATE_COINS");

export const updateCoins = (value, currency) => ({
  type: UPDATE_COINS,
  value,
  currency
});

export function fetchCoins(currency) {
  return async (dispatch) => {
    try {
      // fetch currency data promise, dispatch update coins action with async data
      const result = await fetch(`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=${currency}`);
      dispatch(updateCoins(JSON.parse(await result.text()).Data, currency));
    } catch (error) {
      console.log(error);
    }
  }
}

export const SORT_COINS = Symbol("SORT_COINS");

export const sortCoins = (column) => ({
  type: SORT_COINS,
  column
});

export const SET_LOADING = Symbol("SET_LOADING");

export const setLoading = (value) => ({
  type: SET_LOADING,
  value
});