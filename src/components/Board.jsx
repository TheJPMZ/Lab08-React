import React, { Component } from 'react';
import './Board.css';
import Card from './card';

class Board extends Component {
  constructor(props) {
    super(props);
    this.lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 1, 2, 3, 4, 5, 6, 7, 8];

    const shuffled = function shuffle(list) {
      return list
        .map((x) => ({ x, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ x }) => x);
    };

    this.lista = shuffled(this.lista);
  }

  render() {
    return (
      <div className="wrapper">
        {this.lista.map((x) => (
          // <div>{x}</div>
          <Card image={x} />
        ))}
      </div>
    );
  }
}

export default Board;
