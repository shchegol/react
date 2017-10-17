import React, { Component } from 'react';

import Menu from '../components/Menu';
import Footer from '../components/Footer';

import { Grid, Row, Col } from 'react-bootstrap';

export default class Layout extends Component {
    constructor(props) {
        super(props);

        this.brand = "Brand name";
        this.items = [{
            name: "Главная",
            isActive: true
        }, {
            name: "Страница 1",
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