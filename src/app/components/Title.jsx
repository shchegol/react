import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Title extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Row>
                <Col xs={ 12 }>
                    <h1>{this.props.title}</h1>
                </Col>
            </Row>
        )
    }
}