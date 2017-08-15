import React, {Component} from 'react';
import ToggleButton from './ToggleButton.jsx';

export default class StateToggleButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {isToggleOn: false};
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        return (
            <ToggleButton onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </ToggleButton>
        )
    }
}