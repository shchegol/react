import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MenuItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className={ this.props.active ? "active" : "" }>
                <Link to={ this.props.href }>
                    { this.props.children }
                </Link>
            </li>
        )
    }
}