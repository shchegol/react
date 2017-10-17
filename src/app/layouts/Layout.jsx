import React, { Component } from 'react';

import Menu from '../components/Menu';
import Footer from '../components/Footer';

import { Grid } from 'react-bootstrap';

export default class Layout extends Component {
    constructor(props) {
        super(props);

        this.brand = "React articles";
        this.items = [{
            name: "Articles page",
            isActive: true
        }, {
            name: "Some page",
            isActive: false
        }];
    }

    render() {
        return (
            <Grid>
                <Menu brand={ this.brand } items={ this.items }/>

                { this.props.children }

                <Footer>
                    Footer
                </Footer>
            </Grid>
        )
    }
}