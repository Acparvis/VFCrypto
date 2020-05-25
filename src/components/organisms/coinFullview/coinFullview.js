import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {fetchCoins, setLoading} from "../../../data/actions/state";
import {getCoin, getCoinIndex} from "../../../utils/getCoin";
import {getFirstKey} from "../../../utils/sortCoins";
import styled from "styled-components";

const CoinViewContainer = styled.div`
  width: 100%;
  background-color: #162B48;
  color: #5E738F;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

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
});

const coinDataConstruct = (coin) => {
  return (
    <div>
      <p>MarketCap: {getFirstKey(coin?.RAW)?.MKTCAP}</p>
      <p>24H VOLUME: {getFirstKey(coin?.RAW)?.TOTALVOLUME24HTO}</p>
      <p>CIRCULATING SUPPLY: {getFirstKey(coin?.RAW)?.SUPPLY}</p>
    </div>
  )
}

class CoinFullview extends Component {

  componentDidMount() {
    const {coinsFetch, currency} = this.props;
    coinsFetch(currency);
  }

  render() {
    const {coins} = this.props;
    const {coin} = this.props?.match?.params;

    return (
      <CoinViewContainer>
        <p>Rank {getCoinIndex(coin, coins) + 1}</p>
        {coinDataConstruct(getCoin(coin, coins))}
      </CoinViewContainer>
    );
  }
}

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(CoinFullview);