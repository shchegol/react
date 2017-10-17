import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export default class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar inverse fluid fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">
                            { this.props.brand }
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        { this.props.children }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}