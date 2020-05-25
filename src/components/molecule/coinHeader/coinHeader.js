import React, {Component} from 'react';
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {fetchCoins, setLoading} from "../../../data/actions/state";
import {getCoin} from "../../../utils/getCoin";
import {BackButton} from "../../atoms/backButton/backButton";
import { getRawData } from "../../../utils/getRawData";
import {getCurrencySymbol} from "../../../utils/getCurrencySymbol";

const mapStateToProps = state => {
  let coins = state.get("coins");
  let currency = state.get("currency");

  return {
    coins,
    currency
  }
};

const mapDispatchToProps = dispatch => ({
  coinsFetch: (currency) => dispatch(fetchCoins(currency)),
  loadingSet: (value) => dispatch(setLoading(value)),
});


const renderCoinInfo = (coin) => {
  const rawData = getRawData(coin);


  return (
    <>
      <img src={`https://www.cryptocompare.com${coin?.CoinInfo?.ImageUrl}`}/>
      <h2>{coin?.CoinInfo?.FullName}</h2>
      <h3>{coin?.CoinInfo?.Name}</h3>
      <p>{getCurrencySymbol(coin) + " "}{rawData?.PRICE}</p>
    </>
  )
}

class CoinHeader extends Component {
  render() {
    const {coins} = this.props;
    const {coin} = this.props?.match?.params;

    return (
      <div>
        <BackButton/>
        {console.log(getCoin(coin, coins))}
        {renderCoinInfo(getCoin(coin, coins))}
      </div>
    );
  }
}

export default compose(withRouter, connect(mapStateToProps))(CoinHeader);