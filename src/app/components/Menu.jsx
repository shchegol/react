import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

import MenuItem from './MenuItem'

export default class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let items = this.props.items.map((item, index) => {
            return <MenuItem key={index} name={item.name} active={item.isActive}/>
        });

        return (
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        {this.props.brand}
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        {items}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}