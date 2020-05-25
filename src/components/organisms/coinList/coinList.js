import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchCoins, sortCoins, setLoading } from "../../../data/actions/state";
import CoinRow from "../../molecule/coinRow/coinRow";
import styled from "styled-components";
import sortSwitch from "../../../utils/sortCoins";
import { BeatLoader } from "react-spinners";
import columns from "../../../constants/columns";

const Table = styled.table`
  width: 80%;
  margin: auto;
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

const TableHeaderRow = styled.th`
  color: ${props => props.orderCol ? "black" : "inherit"};
`;


const mapStateToProps = state => {
  let coins = state.get("coins");
  let currency = state.get("currency");
  let column = state.get("sortOnColumn");
  let loading = state.get("loading");

  return {
    coins,
    currency,
    column,
    loading
  }
};

const mapDispatchToProps = dispatch => ({
  coinsFetch: (currency) => dispatch(fetchCoins(currency)),
  coinsSort: (column) => dispatch(sortCoins(column)),
  loadingSet: (value) => dispatch(setLoading(value)),
});

class CoinList extends Component {

  componentDidMount() {
    this.getCoinData();
  }

  getCoinData = () => {
    const { coinsFetch, currency, loadingSet } = this.props;
    loadingSet(true);
    coinsFetch(currency);
  }

  render() {
    const {coins, column, loading} = this.props;

    // if no coins in array, assumed loading state
    if (loading) return <BeatLoader/>;

    return (
      <Table>

        <TableHeader>
          <tr>
            {columns.map((col, i) => <TableHeaderRow key={i} onClick={() => this.props.coinsSort(col.value)} orderCol={col.value === column}>{col.heading}</TableHeaderRow>)}
          </tr>
        </TableHeader>
        <tbody>
        {sortSwitch(column, coins).map((coin, i) => <CoinRow key={i} coin={coin} index={i}/>)}
        </tbody>
      </Table>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CoinList);