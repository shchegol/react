import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Media, Button, Glyphicon } from 'react-bootstrap';

export default class Article extends Component {
    constructor(props) {
        super(props);

        this.like = this.like.bind(this)
    }

    like() {
        this.props.like(this.props.id);
    }

    render() {
        return (
            <Media>
                <Media.Left>
                    { this.props.userId }
                </Media.Left>
                <Media.Body>
                    <Media.Heading>
                        <a href="#">
                            { this.props.title }
                        </a>
                    </Media.Heading>
                    <p>
                        { this.props.body }
                    </p>
                    <Button bsStyle="primary" bsSize="xsmall" onClick={ this.like }>
                        <Glyphicon glyph="heart" /> { this.props.likes }
                    </Button>
                </Media.Body>

                <hr/>
            </Media>
        )
    }
}

Article.defaultProps = {
    likes: 0,
    body: ''
};

Article.propTypes = {
    likes: PropTypes.number,
    userId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string
};