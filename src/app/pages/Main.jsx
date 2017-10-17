import React, { Component } from 'react';
import axios from 'axios';

import Articles from '../components/Articles';

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isReady: false
        };

        this.articles = axios.get('http://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                this.articles = res.data;

                this.setState({
                    isReady: true
                })
            });
    }

    render() {
        return (
            this.state.isReady
                ? <Articles articles={ this.articles }/>
                : <div>Loading...</div>
        )
    }
}