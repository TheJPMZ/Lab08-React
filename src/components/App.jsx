import React, { Component } from 'react';
import './App.css';
import Board from './Board';
import useStateManager from './statemanager';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      restantes: 9,
    };
  }

  updateCounter = () => {
    this.setState({
      counter: useStateManager().getMovements(),
      restantes: useStateManager().getLeftLength(),
    });
  };

  render() {
    const { counter } = this.state;
    const { restantes } = this.state;
    return (
      <div className="App" onClick={this.updateCounter} onKeyDown={this.updateCounter} role="button" tabIndex={0}>
        <h1>Memorias del Cosmere</h1>
        <h2>
          Movimientos:
          {counter}
        </h2>
        <h3>
          Parejas Restantes:
          {restantes}
        </h3>
        <Board />
      </div>
    );
  }
}

export default App;
