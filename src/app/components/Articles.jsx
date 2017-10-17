import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Article from './Article';

export default class Articles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isReady: false,
            articles: null
        };

        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                let articles = res.data.map((article) => {
                    article.likes = 0;
                    return article;
                });

                this.setState({
                    isReady: true,
                    articles: articles
                });
            });

        this.like = this.like.bind(this);
    }

    like(id) {
        let article = this.state.articles.filter((article) => {
            return article.id === id;
        })[0] || null;

        if (article) {
            article.likes++;
            this.forceUpdate();
        }
    }

    render() {
        if (!this.state.articles) {
            return null;
        }

        let articles = this.state.articles.map((article, index) => {
            return <Article key={ index } { ...article } like={ this.like }/>
        });

        return (
            <Row>
                <Col xs={ 12 }>
                    {this.state.isReady ? articles : "Loading articles..."}
                </Col>
            </Row>
        )
    }
}