import Row from "./Row";
import "./Grid.css";

const NUMROWS = 7

let rows = []

for(let i = 0; i<NUMROWS; i++){
    rows.push(<Row/>)
}

function Grid() {
    return (
        <div className="Grid">
            {rows}
        </div>
    )
}

export default Grid;