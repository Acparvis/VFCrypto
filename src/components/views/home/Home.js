import React, {Component} from 'react';
import CoinList from "../../organisms/coinList/coinList";
import NavBar from "../../organisms/navBar/NavBar";

export class Home extends Component {
  render() {
    return (
      <>
        <NavBar/>
        <CoinList/>
      </>
    );
  }
}

