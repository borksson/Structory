import React from "react";
import "./Cell.css";

class Cell extends React.Component {
    onClick = (row, col) => {
        console.log("Clicked cell: ", row, col);
    }

    render () {
        return (
            <div className="Cell" onClick={() => this.onClick(this.props.row, this.props.col)}/>
        )
    }
}

export default Cell;