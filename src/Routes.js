import React, {Component} from 'react';
import {Route} from "react-router-dom";
import {Home} from "./components/views/home/Home";
import {CoinView} from "./components/views/coinView/CoinView";

export const Routing = {
  home: "/",
  coin: "/coin/:coin"
}

class Routes extends Component {
  render() {
    return (
      <>
        <Route path={Routing.home} exact component={Home} />
        <Route path={Routing.coin} exact component={CoinView} />
      </>
    );
  }
}

export default Routes;