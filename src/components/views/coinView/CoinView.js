import React, {Component} from 'react';
import { withRouter } from "react-router";
import NavBar from "../../organisms/navBar/NavBar";



class CoinView extends Component {
  render() {
    const { location } = this.props;

    return (
      <div>
        <NavBar/>
        {JSON.stringify(location)}
      </div>
    );
  }
}


export default withRouter(CoinView);