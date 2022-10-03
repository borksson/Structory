import "./Button.css";
import React from 'react';

class Button extends React.Component {
    onClick = (output) => {
        console.log("Clicked" , output)
    }

    render () {
        return (
            <div className="Button" onClick={() => this.onClick(this.props.param)}>
                <img src={this.props.icon} alt="Icon" width="70" height="70"/>
            </div>
        )
    }
}

export default Button;