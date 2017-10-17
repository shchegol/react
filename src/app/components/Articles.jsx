import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import Article from './Article';

export default class Articles extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let articles = this.props.articles.map((article, index) => {
            return <Article key={index} {...article}/>
        });

        return (
            <Row>
                <Col xs={12}>
                    {articles}
                </Col>
            </Row>
        )
    }
}