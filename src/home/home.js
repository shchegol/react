import React from 'react';
import ReactDOM from 'react-dom';

export default {

    start() {
        class Welcome extends React.Component {
            render() {
                return <h1>Hello, {this.props.name}</h1>
            }
        }

        const element = <Welcome name="Sara" />;
        const location = document.querySelector('body');

        ReactDOM.render(element, location);
    }
}
