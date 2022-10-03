import Slot from "./Slot";
import "./Inventory.css";

const NUMSLOTS = 8;

let slots = []

for(let i=0; i<NUMSLOTS; i++){
    slots.push(<Slot slotNum={i}/>);
}

function Inventory(){
    return (
        <div className="Inventory">
            {slots}
        </div>
    )
}

export default Inventory;