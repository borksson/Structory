import Slot from "./Slot";
import "./Sidebar.css";

const NUMSLOTS = 3;

let slots = []

for(let i=0; i<NUMSLOTS; i++){
    slots.push(<Slot/>);
}

function Sidebar(){
    return (
        <div className="Sidebar">
            {slots}
        </div>
    )
}

export default Sidebar;