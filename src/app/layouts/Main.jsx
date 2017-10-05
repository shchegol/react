import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap'

export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <h1>Hello</h1>
                    </Col>
                </Row>
            </Grid>
        );
    }
}