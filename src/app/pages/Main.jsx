import React, { Component } from 'react';
import Articles from '../components/Articles';
import Title from '../components/Title';

export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Title title={ 'Главная страница' }/>
                <Articles/>
            </div>
        )
    }
}