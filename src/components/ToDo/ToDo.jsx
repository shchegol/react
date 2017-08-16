import React, {Component} from 'react';
import {
    Row, Col,
    Button,
    FormGroup, FormControl, InputGroup, ControlLabel,
    ListGroup, ListGroupItem
} from 'react-bootstrap';

class ToDoItem extends React.Component {
    render() {
        const {ToDoText} = this.props;

        return (
            <ListGroupItem>
                {ToDoText}
            </ListGroupItem>
        );
    }
}

export default class ToDo extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addItem = this.addItem.bind(this);
        this.state = {
            value: '',
            items: []
        };
    }

    handleInputChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    addItem() {
        const { items } = this.state;
        this.setState({ items: [ ...items, { count: 0 } ] });
    }

    render() {
        const { items, value } = this.state;
        const { addItem } = this;

        return (
            <Row className="mt_2">
                <form>
                    <Col xs={12}>
                        <FormGroup controlId="formBasicText">
                            <InputGroup>
                                <FormControl
                                    type="text"
                                    name="todoInput"
                                    placeholder="Введите что нужно сделать"
                                    onChange={this.handleInputChange}
                                />
                                <InputGroup.Button>
                                    <Button type="button" bsStyle="success" onClick={addItem}>
                                        Добавить в список
                                    </Button>
                                </InputGroup.Button>
                            </InputGroup>
                        </FormGroup>
                    </Col>
                </form>

                <Col xs={12} className="mt_2">
                    <ListGroup id="todoList">
                        { items.map( (item, i) => <ToDoItem key={i} ToDoText={value}/> ) }
                    </ListGroup>
                </Col>
            </Row>
        )
    }
}



