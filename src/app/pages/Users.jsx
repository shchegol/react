import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row>
                <Col xs={ 12 }>
                    User
                </Col>
            </Row>
        )
    }
}