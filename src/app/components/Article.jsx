import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import Articles from './Articles';

export default class Article extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let articles = this.props.articles.map((article, index) => {
            return <Articles key={index} {...article}/>
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