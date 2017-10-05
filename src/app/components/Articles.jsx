import React, {Component} from 'react';
import {Media} from 'react-bootstrap';

export default class Articles extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Media>
                <Media.Left>
                    {this.props.userId}
                </Media.Left>
                <Media.Body>
                    <Media.Heading>
                        <a href="#">
                            {this.props.title}
                        </a>
                    </Media.Heading>
                    <p>
                        {this.props.body}
                    </p>
                </Media.Body>
            </Media>
        )
    }
}