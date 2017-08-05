import React from 'react';
import ReactDOM from 'react-dom';
import ToggleButton from '../../components/ToggleButton/ToggleButton.js';
import {Grid, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default {

    start() {
        const location = document.getElementById('root');

        class Clock extends React.Component {
            constructor(props) {
                super(props);
                this.state = {date: new Date()};
            }

            componentDidMount() {
                this.timerID = setInterval(
                    () => this.tick(),
                    1000
                );
            }

            componentWillUnmount() {
                clearInterval(this.timerID);
            }

            tick() {
                this.setState({
                    date: new Date()
                })
            }

            render() {
                return (
                    <h1>Current time: {this.state.date.toLocaleTimeString()}</h1>
                )
            }
        }

        class App extends React.Component {
            render() {
                return (
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                <ToggleButton/>
                            </Col>
                            <Col xs={12}>
                                <Clock/>
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
