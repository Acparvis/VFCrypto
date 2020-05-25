import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {fetchCoins, setLoading} from "../../../data/actions/state";
import {getCoin, getCoinIndex} from "../../../utils/getCoin";
import {getFirstKey} from "../../../utils/sortCoins";
import styled from "styled-components";
import DataTile from "../../atoms/dataTile/dataTile";
import {getCurrencySymbol} from "../../../utils/getCurrencySymbol";

const CoinViewContainer = styled.div`
  width: 100%;
  background-color: #162B48;
  color: #5E738F;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 80vh;
  padding-top: 100px;
  
  > div:first-child{
    display: flex;
    align-items: center;
    height: 160px;
  }
`;

const DataTileContainer = styled.div`
  width: contain;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-height: 250px;
  
  
  div {
    flex-basis: 50%;
  }
`;

const RankDiv = styled.div`
  background: #1F385A;
  color: #66A7E8;
  font-weight: 700;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
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

const coinDataConstruct = (coin, trail) => {
  return (
    <DataTileContainer>
      <DataTile title={"MARKET CAP"} value={getFirstKey(coin?.RAW)?.MKTCAP} currencySymbol={getCurrencySymbol(coin)}/>
      <DataTile title={"24H VOLUME"} value={getFirstKey(coin?.RAW)?.TOTALVOLUME24HTO}
                currencySymbol={getCurrencySymbol(coin)}/>
      <DataTile title={"CIRCULATING SUPPLY"} value={getFirstKey(coin?.RAW)?.SUPPLY} trail={trail}/>
    </DataTileContainer>
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
        <div>
          <p>RANK</p>
          <RankDiv>{getCoinIndex(coin, coins) + 1}</RankDiv>
        </div>
        {coinDataConstruct(getCoin(coin, coins), coin)}
      </CoinViewContainer>
    );
  }
}

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(CoinFullview);