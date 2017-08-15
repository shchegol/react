import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

const propTypes = {
    onClick: PropTypes.func,
    isToggleOn: PropTypes.bool
};

const defaultProps = {
    onClick: () => {},
    isToggleOn: true
};

export default class ToggleButton extends Component {
    render() {
        const {onClick, isToggleOn} = this.props;

        return (
            <div>
                <Button bsStyle="primary" onClick={onClick}>
                    {isToggleOn}
                </Button>
            </div>
        );
    }
}

ToggleButton.propTypes = propTypes;
ToggleButton.defaultProps = defaultProps;


// import React, {Component} from 'react';
// import {Button} from 'react-bootstrap';
//
// export default class ToggleButton extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {isToggleOn: true};
//         this.handleClick = this.handleClick.bind(this);
//     }
//
//     handleClick() {
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }))
//     }
//
//     render() {
//         return (
//             <Button bsStyle="primary" onClick={this.handleClick}>
//                 {this.state.isToggleOn ? 'ON' : 'OFF'}
//             </Button>
//         )
//     }
// }