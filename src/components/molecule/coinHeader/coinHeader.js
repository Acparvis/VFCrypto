import React, {Component} from 'react';
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getCoin} from "../../../utils/getCoin";
import {BackButton} from "../../atoms/backButton/backButton";
import {getRawData} from "../../../utils/getRawData";
import {getCurrencySymbol} from "../../../utils/getCurrencySymbol";
import styled from "styled-components";
import numeral from "numeral";

const CoinHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  a{
    color: #5E738F;
    
    svg{
      height: 25px;
      width: 25px;
      border-radius: 50%;
      background: #E7F2FD;
       color: #66A7E8;
       padding: 3px;
    }
  }
  
  * {
    margin: 5px;
  }
  
  img{
    height: 40px;
    width: 40px;
  }
  
  h2{
    font-size: 20px;
    font-weight: 300;
    margin: 0px;
  }
  
  h3{
    color: #5E738F;
    font-size: 12px;
    margin: 0px;
  }
  
  p {
    font-size: 20px;
    
    > span{
        color: #5E738F;
    }
  }
`;

const mapStateToProps = state => {
  let coins = state.get("coins");
  let currency = state.get("currency");

  return {
    coins,
    currency
  }
};

const renderCoinInfo = (coin) => {
  const rawData = getRawData(coin);


  return (
    <>
      {!!coin?.CoinInfo?.ImageUrl && <img src={`https://www.cryptocompare.com${coin?.CoinInfo?.ImageUrl}`}/>}
      <div>
        <h2>{coin?.CoinInfo?.FullName}</h2>
        <h3>{coin?.CoinInfo?.Name}</h3>
      </div>
      <p><span>{getCurrencySymbol(coin) + " "}</span>{numeral(rawData?.PRICE).format('0,0.00')}</p>
    </>
  )
}

class CoinHeader extends Component {
  render() {
    const {coins} = this.props;
    const {coin} = this.props?.match?.params;

    return (
      <CoinHeaderContainer>
        <BackButton/>
        {renderCoinInfo(getCoin(coin, coins))}
      </CoinHeaderContainer>
    );
  }
}

export default compose(withRouter, connect(mapStateToProps))(CoinHeader);