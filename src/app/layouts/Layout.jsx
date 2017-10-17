import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Comments from '../pages/Comments';
import Users from '../pages/Users';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem'
import Footer from '../components/Footer';

import { Grid } from 'react-bootstrap';

export default class Layout extends Component {
    constructor(props) {
        super(props);

        this.brand = "React articles";
        this.items = [{
            name: "Articles page",
            isActive: true
        }, {
            name: "Comments",
        }, {
            name: "Users",
        }];
    }

    render() {
        return (
            <Grid>
                <Menu brand={ this.brand } items={ this.items }>
                    <MenuItem href="/" active>
                        Articles page
                    </MenuItem>
                    <MenuItem href="/Comments">
                        Comments
                    </MenuItem>
                    <MenuItem href="/Users">
                        Users
                    </MenuItem>
                </Menu>

                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route path='/Comments' component={Comments}/>
                    <Route path='/Users' component={Users}/>
                </Switch>

                <Footer>
                    &copy; 2017 Alexander Shchegol
                </Footer>
            </Grid>
        )
    }
}