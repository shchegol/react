import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import axios from 'axios';

import Menu from '../components/Menu';
import Articles from '../components/Articles';
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
            <Grid>
                {
                    this.state.isReady
                        ?
                        <div>
                            <Menu brand={this.brand} items={this.items}/>

                            <Row>
                                <Col xs={12}>
                                    <h1>{this.brand}</h1>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12}>
                                    <Articles articles={this.articles}/>
                                </Col>
                            </Row>

                            <Footer/>
                        </div>
                        :
                        <div>
                            <h1 className="text-center mt_2">
                                Loading...
                            </h1>
                        </div>

                }
            </Grid>
        )
    }
}