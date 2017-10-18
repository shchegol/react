import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class MenuItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeItem: false,
        };

        this.addActiveClass = this.addActiveClass.bind(this);
    }

    addActiveClass(match) {
console.log(match)
    }

    render() {
        return (
            <li className={ this.state.activeItem ? "active" : "" }>
                <NavLink to={ this.props.href } isActive={this.addActiveClass}>
                    { this.props.children }
                </NavLink>
            </li>
        )
    }
}