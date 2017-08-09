import React from 'react';
import ReactDOM from 'react-dom';
import ToggleButton from '../../components/ToggleButton/ToggleButton';
import Clock from '../../components/Clock/Clock';
import NumberList from '../../components/NumberList/NumberList';
import NameForm from '../../components/NameForm/NameForm';
import {Grid, Row, Col} from 'react-bootstrap';
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
                                <h3>The clock</h3>
                                <div>Now: <Clock /></div>
                            </Col>

                            <Col xs={12}>
                                <h3>Just button</h3>
                                <ToggleButton />
                            </Col>

                            <Col xs={12}>
                                <h3>List</h3>
                                <NumberList list={someArray} />
                            </Col>

                            <Col xs={12}>
                                <h3>Form</h3>
                                <NameForm />
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
