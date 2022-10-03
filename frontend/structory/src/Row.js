import Cell from "./Cell";
import "./Row.css";

// TODO: Make dynamic
const NUMCELLS = 10;

let cells = []

for(let i=0; i<NUMCELLS; i++){
    cells.push(<Cell/>);
}

function Row() {
    return (
        <div className="Row">
            {cells}
        </div>
    )
}

export default Row;