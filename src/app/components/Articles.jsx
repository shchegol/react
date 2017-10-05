import React, {Component} from 'react';
// import {Navbar} from 'react-bootstrap';

import Article from './Article'

export default class Articles extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Article

                <Article />
            </div>
        )
    }
}