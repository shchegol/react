import React, { Component } from 'react';
import { Row, Col, Modal, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import axios from 'axios';
import Article from './Article';

export default class Articles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isReady: false,
            articles: null,
            showModal: false
        };

        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                let articles = res.data.map((article) => {
                    article.likes = 0;
                    return article;
                });

                this.setState({
                    isReady: true,
                    articles
                })
            });

        this.like = this.like.bind(this);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.addArticle = this.addArticle.bind(this);
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

    showModal() {
        this.setState({
            showModal: true
        });
    }

    hideModal() {
        this.setState({
            showModal: false
        });
    }

    addArticle() {
        let title = this.inputTitle.value;
        let body = this.inputBody.value;
        let articles = this.state.articles;

        articles.push({
            id: Math.ceil(Math.random() * 100000),
            userId: 1,
            title,
            body,
            likes: 0
        });

        this.setState({
            articles
        });

        this.hideModal();
    }

    render() {
        let articles;

        if (this.state.articles) {
            articles = this.state.articles.map((article, index) => {
                return <Article key={ index } { ...article } like={ this.like }/>
            });
        } else {
            articles = "No articles."
        }

        return (
            <Row>
                <Col xs={ 12 } bsClass="text-right mt_2 col">
                    <Button bsStyle="primary" onClick={ this.showModal }>
                        Add article
                    </Button>
                </Col>

                <Col xs={12} bsClass="mt_2 col" >
                    {
                        this.state.isReady
                            ?
                            articles
                            :
                            "Loading articles..."
                    }

                    <Modal show={ this.state.showModal }>
                        <Modal.Header>
                            <Modal.Title>Add new article</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <form>
                                <FormGroup controlId="title">
                                    <ControlLabel>Title</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="Заголовок статьи"
                                        inputRef={ (ref) => {
                                            this.inputTitle = ref
                                        } }
                                    />
                                </FormGroup>

                                <FormGroup controlId="body">
                                    <ControlLabel>Text</ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="Введите текст"
                                        inputRef={ (ref) => {
                                            this.inputBody = ref
                                        } }
                                    />
                                </FormGroup>
                            </form>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button onClick={ this.hideModal }>Close</Button>
                            <Button bsStyle="primary" onClick={ this.addArticle }>Add</Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
        )
    }
}