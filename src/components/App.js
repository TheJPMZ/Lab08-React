import React, {Component} from "react";
import "./App.css"
import Board from "./Board";
import useStateManager from './statemanager'
import Card from "./card";


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            restantes: 9,
        }
    }
    updateCounter = () => {
        this.setState({
            counter: useStateManager().getMovements(),
            restantes: useStateManager().getLeftLength()
        })
    }

    render() {
        return (
            <div className="App" onClick={this.updateCounter}>
                <h1>Movimientos: {this.state.counter}</h1>
                <h2>Parejas Restantes: {this.state.restantes}</h2>
                <Board/>
            </div>

        );
    }
}

export default App