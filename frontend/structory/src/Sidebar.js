import Button from "./Button";
import "./Sidebar.css";
import microscope from './microscope.png';
import cart from './cart.png';
import chest from './chest.png';

const NUMSLOTS = 3;
const BUTTON_DATA = [{name:'Research', icon:microscope}, {name:'Shop', icon:cart}, {name:'Inventory', icon:chest}];

let slots = [];

for(let i=0; i<NUMSLOTS; i++){
    slots.push(<Button param={BUTTON_DATA[i].name} icon={BUTTON_DATA[i].icon}/>);
}

function Sidebar(){
    return (
        <div className="Sidebar">
            {slots}
        </div>
    )
}

export default Sidebar;