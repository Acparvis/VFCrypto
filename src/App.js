import React from 'react';
import './App.css';
import CoinList from "./components/coinList/coinList";

function App() {
  return (
    <div className="App">
      <header>
        <CoinList/>
      </header>
    </div>
  );
}

export default App;
