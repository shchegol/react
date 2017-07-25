import React from 'react';
import ReactDOM from 'react-dom';

export default {
    render() {
        ReactDOM.render(
            <div id="root">
                <h1>Hello, world!</h1>
            </div>,
            document.querySelector('body')
        );
    }
}
