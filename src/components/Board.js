import React, {Component} from "react";
import "./Board.css"


class Board extends Component {

    constructor(props) {
        super(props);
        this.lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

        const shuffled = function (list) {
            return list.map(x => ({x, sort: Math.random()})).sort((a, b) => a.sort - b.sort).map(({x}) => x)
        }

        this.lista = shuffled(this.lista)
    }

    render() {
        return (
            <div className="wrapper">
                {this.lista.map((x)=> (
                    <div> {x}</div>
                ))}
            </div>
        );
    }


}

export default Board