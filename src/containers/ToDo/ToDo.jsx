import React, {Component} from 'react';
import {ToDo} from 'components'
import {Grid, Row, Col} from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <h1>Todo list</h1>
                    </Col>
                </Row>

                <ToDo/>
            </Grid>
        )
    }
}
