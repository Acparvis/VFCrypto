import React, {Component} from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {fetchCoins, setLoading} from "../../../data/actions/state";
import currencies from "../../../constants/currencies";
import {getFirstKey} from "../../../utils/sortCoins";
import moment from "moment";
import styled from "styled-components";
import {withRouter} from "react-router-dom";
import CoinHeader from "../../molecule/coinHeader/coinHeader";

const Header = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 95px; 
`;

const Heading = styled.h1`
  font-weight: normal;
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
  loadingSet: (value) => dispatch(setLoading(value)),
});

class NavBar extends Component {

  getCoinData = (curr) => {
    const {coinsFetch, loadingSet} = this.props;
    loadingSet(true);
    coinsFetch(curr);
  }

  getLastUpdate = () => {
    const {coins} = this.props;
    if (coins.length) return moment.unix(getFirstKey(coins[0]?.RAW).LASTUPDATE).format("YYYY-MM-DD HH:mm");
    return false;
  }

  render() {
    const {currency, match} = this.props;

    return (
      <Header>
        {!!match?.params?.coin ? <CoinHeader/> :
          (
            <>
              <Heading>VFCrypto</Heading>
              {this.getLastUpdate() && <p>Last Update: {this.getLastUpdate()}</p>}
            </>
          )
        }
        <select value={currency} onChange={(e) => this.getCoinData(e.target.value)}>
          {currencies.map((curr, i) => <option key={i} value={curr}>{curr}</option>)}
        </select>
      </Header>
    );
  }
}


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(NavBar);