import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import axios from 'axios';

import Menu from '../components/Menu';
import Article from '../components/Article';
import Footer from '../components/Footer';

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isReady: false
        };

        this.articles = axios.get('http://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                //TODO remove console.log
                console.log(res);

                this.articles = res.data;
                this.brand = "React Blog";
                this.title = "Блог Васи Пупкина";
                this.items = [{
                    name: "Главная",
                    isActive: true
                }, {
                    name: "Страница 1",
                    isActive: false
                }];

                this.setState({
                    isReady: true
                })
            });
    }

    render() {
        return (
            this.state.isReady
                ?

                <Grid>
                    <Menu brand={this.brand} items={this.items}/>

                    <Row>
                        <Col xs={12}>
                            <h1>{this.brand}</h1>
                        </Col>
                    </Row>

                    <Article articles={this.articles}/>

                    <Row>
                        <Col xs={12}>
                            <Footer>
                                Footer
                            </Footer>
                        </Col>
                    </Row>
                </Grid>

                :

                <Grid>
                    <Row>
                        <Col xs={12}>
                            <h1 className="text-center mt_2">
                                Loading...
                            </h1>
                        </Col>
                    </Row>
                </Grid>

        )
    }
}