import React, {Component} from 'react';
import {
    Row, Col,
    Button,
    FormGroup, FormControl, InputGroup, ControlLabel,
    ListGroup, ListGroupItem
} from 'react-bootstrap';

class ToDoItem extends React.Component {
    render() {
        const todoEntries = this.props.entries;

        function createTasks(item) {
            return <ListGroupItem key={item.key}>{item.text}</ListGroupItem>
        }

        const listItems = todoEntries.map(createTasks);

        return (
            <ListGroup id="todoList">
                {listItems}
            </ListGroup>
        );
    }
}

export default class ToDo extends Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.state = {
            items: []
        };
    }

    addItem(e) {
        e.preventDefault();

        if (this.ToDoText.value === "") {
            return;
        }

        const itemArray = this.state.items;

        itemArray.push(
            {
                text: this.ToDoText.value,
                key: Date.now()
            }
        );

        this.setState({
            items: itemArray
        });

        this.ToDoText.value = "";


    }

    render() {
        const {items} = this.state;
        const {addItem} = this;

        return (
            <Row className="mt_2">
                <form onSubmit={addItem}>
                    <Col xs={12}>
                        <FormGroup controlId="formBasicText">
                            <InputGroup>
                                <FormControl
                                    type="text"
                                    inputRef={input => this.ToDoText = input}
                                    placeholder="Введите что нужно сделать"
                                />
                                <InputGroup.Button>
                                    <Button type="submit" bsStyle="success">
                                        Добавить в список
                                    </Button>
                                </InputGroup.Button>
                            </InputGroup>
                        </FormGroup>
                    </Col>
                </form>

                <Col xs={12} className="mt_2">
                    <p>Невыполненных заданий: {items.length}</p>
                    <ToDoItem entries={items}/>
                </Col>
            </Row>
        )
    }
}



