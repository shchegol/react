import React, {Component} from 'react';
import {NavItem} from 'react-bootstrap';

export default class MenuItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavItem active={this.props.active}  href="#">
                {this.props.name}
            </NavItem>
        )
    }
}