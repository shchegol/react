import React, {Component} from 'react';
import {
    Row, Col,
    FormGroup, FormControl, HelpBlock,
    ListGroup, ListGroupItem
} from 'react-bootstrap';

class Items extends React.Component {
    itemClicked(text) {
        console.log(text);
    }

    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map((item) => {
                const text = item.text;
                return (
                    <ListGroupItem key={item.key} onClick={this.itemClicked.bind(this, text)}>
                        {item.text}
                    </ListGroupItem>
                )
            }
        );

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
        this.handleChange = this.handleChange.bind(this);
        this.addItem = this.addItem.bind(this);
        this.state = {
            value: '',
            validationState: null,
            validationMessage: '',
            items: []
        };
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    addItem(e) {
        e.preventDefault();
        const length = this.state.value.length;

        if (!length) {
            this.setState({
                validationState: "error",
                validationMessage: "Впишите задачу"
            });
            return;
        }

        const itemArray = this.state.items;

        itemArray.push({
            text: this.state.value,
            key: Date.now()
        });

        this.setState({
            items: itemArray,
            value: "",
            validationState: null,
            validationMessage: ""
        });
    }

    render() {
        const {value, items, validationState, validationMessage} = this.state;
        const {addItem, handleChange} = this;

        return (
            <Row className="mt_2">
                <form onSubmit={addItem}>
                    <Col xs={12}>
                        <FormGroup
                            controlId="formBasicText"
                            validationState={validationState}
                        >

                            <FormControl
                                type="text"
                                value={value}
                                onChange={handleChange}
                                placeholder="Что нужно сделать"
                            />

                            <HelpBlock>{validationMessage}</HelpBlock>
                        </FormGroup>
                    </Col>
                </form>

                <Col xs={12} className="mt">
                    <p>Невыполненных заданий: {items.length}</p>
                    <Items entries={items}/>
                </Col>
            </Row>
        )
    }
}



