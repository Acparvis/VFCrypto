import React, {Component} from 'react';
import numeral from 'numeral';
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const PercentRow = styled.td`
      color: ${props => props.value < 0 ? "red" : "green"};
      text-align: center;
`;

const CoinTableRow = styled.tr`
      width: 100%;
      text-align: left;
      border-bottom: solid 1px lightgrey;
`;

const CoinIcon = styled.img`
      height: 25px;
      width: 25px;
`;

const IconCell = styled.td`
      display: flex;
      flex-directon: row;
      align-items: center;
      justify-content: flex-start;
      width: content;
      
       * {
        margin: 5px;
      }
`;

const NameSpan = styled.span`
      color: black;
`;

class CoinRow extends Component {
  round = number => Number.parseFloat(number).toFixed(2);

  getDisplayData = coin => coin.DISPLAY[Object.keys(coin.DISPLAY)[0]];

  getRawData = coin => coin.RAW[Object.keys(coin.RAW)[0]];

  getCurrencySymbol = coin => coin.DISPLAY[Object.keys(coin.DISPLAY)[0]].CHANGE24HOUR.charAt(0);


  render() {
    const {PRICE, MKTCAP, CHANGEPCT24HOUR} = this.getRawData(this.props.coin);
    const {Name, FullName, ImageUrl} = this.props.coin.CoinInfo;
    const {index, history} = this.props;

    return (
      <CoinTableRow onClick={() => history.push(`/coin/${Name}`)}>
        <IconCell>
          {index + 1}
          <CoinIcon src={`https://www.cryptocompare.com${ImageUrl}`}/>
          <NameSpan>{FullName}</NameSpan>
        </IconCell>
        <td>{this.getCurrencySymbol(this.props.coin) + " "}{<NameSpan>{numeral(PRICE).format('0,0.00')}</NameSpan>}</td>
        <td>{this.getCurrencySymbol(this.props.coin) + " "}{ <NameSpan>{numeral(MKTCAP).format('0,0.00')}</NameSpan>}</td>
        <PercentRow
          value={numeral(CHANGEPCT24HOUR).format('0.00')}
        >{numeral(CHANGEPCT24HOUR).format('0.00')}
        </PercentRow>
      </CoinTableRow>
    );
  }
}

export default withRouter(CoinRow);