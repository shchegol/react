import React, {Component} from 'react';

export default class ToggleButton extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        return (
            <button onClick={this.handleClick} className="btn">
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}