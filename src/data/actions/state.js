export const UPDATE_COINS = Symbol("UPDATE_COINS");

export const updateCoins = (value) => ({
  type: UPDATE_COINS,
  value
});

export function fetchCoins(currency) {
  return dispatch => {

    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=${currency}`, requestOptions)
      .then(response => response.text())
      .then(result => dispatch(updateCoins(JSON.parse(result).Data)))
      .catch(error => console.log('error', error));
      }
}

export const SORT_COINS = Symbol("SORT_COINS");

export const sortCoins = (column) => ({
  type: SORT_COINS,
  column
});