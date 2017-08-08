import React from 'react';
import ReactDOM from 'react-dom';
import ToggleButton from '../../components/ToggleButton/ToggleButton';
import Clock from '../../components/Clock/Clock';
import NumberList from '../../components/NumberList/NumberList';
import {Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default {

    start() {
        const location = document.getElementById('root');
        const someArray = ['Apple', 2, 3];

        class App extends React.Component {
            render() {
                return (
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                <h1>Now: <Clock/></h1>
                            </Col>

                            <Col xs={12}>
                                <ToggleButton/>
                            </Col>

                            <Col xs={6}>
                                <NumberList list={someArray}/>
                            </Col>
                        </Row>
                    </Grid>
                )
            }
        }

        ReactDOM.render(
            <App/>,
            location
        );


    }
}
