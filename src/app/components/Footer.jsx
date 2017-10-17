import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer>
                <Row>
                    <Col bsClass="mt mb_2 col" xs={ 12 }>
                        { this.props.children }
                    </Col>
                </Row>
            </footer>
        )
    }
}