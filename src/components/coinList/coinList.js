import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchCoins, sortCoins} from "../../data/actions/state";
import CoinRow from "../coinRow";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  color: grey;
  border-collapse: collapse;
  
  td {
    padding: 20px 0px;
  }
`;

const TableHeader = styled.thead`
  font-size: 1em;
  text-align: left;
  background-color: lightgrey;
  
  th {
    padding: 0px;
    border: 0;
  }
`;


const mapStateToProps = state => {
  let coins = state.get("coins");
  let currency = state.get("currency");

  return {
    coins: state.get("coins"),
    currency
  }
};

const mapDispatchToProps = dispatch => ({
  coinsFetch: (currency) => dispatch(fetchCoins(currency)),
  coinsSort: (column) => dispatch(sortCoins(column))
});

class CoinList extends Component {

  componentDidMount() {
    this.props.coinsFetch(this.props.currency)
  }

  render() {
    const {coins} = this.props;

    return (
      <Table>
        <TableHeader>
          <tr>
            <th onClick={() => this.props.coinsSort("crypto")}>CRYPTOCURRENCY</th>
            <th onClick={() => this.props.coinsSort("price")}>PRICE</th>
            <th onClick={() => this.props.coinsSort("marketCap")}>MARKET CAP</th>
            <th onClick={() => this.props.coinsSort("24h")}>24H CHANGE</th>
          </tr>
        </TableHeader>
        <tbody>
        {coins.map((coin, i) => <CoinRow key={i} coin={coin} index={i}/>)}
        </tbody>
      </Table>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CoinList);