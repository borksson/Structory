import React from "react";
import "./Slot.css";

class Slot extends React.Component {
    onClick = (output) => {
        console.log("Clicked slot number: " , output);
    }

    render () {
        return (
            <div className="Slot" onClick={() => this.onClick(this.props.slotNum)}/>
        )
    }

}

export default Slot;