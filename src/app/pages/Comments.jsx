import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Comments extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row>
                <Col xs={ 12 }>
                    Comments
                </Col>
            </Row>
        )
    }
}