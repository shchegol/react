import React from 'react';
import ReactDOM from 'react-dom';

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
                )
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

        class Toggle extends React.Component {
            constructor(props) {
                super(props);
                this.state = {isToggleOn: true};
                this.handleClick = this.handleClick.bind(this);
            }

            handleClick() {
                this.setState(prevState => ({
                    isToggleOn: !prevState.isToggleOn
                }))
            }

            render() {
                return (
                    <button onClick={this.handleClick}>
                        {this.state.isToggleOn ? 'ON' : 'OFF'}
                    </button>
                )
            }
        }

        class App extends React.Component {
            render() {
                return (
                    <div>
                        <Clock/>
                        <Toggle/>
                    </div>
                )
            }
        }

        ReactDOM.render(
            <App/>,
            location
        );


    }
}
