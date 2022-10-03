import Cell from "./Cell";
import React from "react";
import "./Row.css";

class Row extends React.Component {
    render () {
        // TODO: Make dynamic
        const NUMCELLS = 10;
        
        let cells = []
        
        for(let i=0; i<NUMCELLS; i++){
            cells.push(<Cell row={this.props.row} col={i}/>);
        }

        return (
            <div className="Row">
                {cells}
            </div>
        )
    }
}

export default Row;