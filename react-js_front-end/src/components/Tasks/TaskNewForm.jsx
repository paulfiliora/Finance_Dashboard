import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

class TaskNewForm extends Component {

    state = {
        newIdea: {}
    }

    handleChange = (event) => {
        const attributeToChange = event.target.name;
        const newValue = event.target.value;

        const updatedNewIdea = { ...this.state.newIdea }
        updatedNewIdea[attributeToChange] = newValue
        this.setState({ newIdea: updatedNewIdea })
    };

    handleSubmit = (event) => {
        event.preventDefault()

        this.props.createIdea(this.state.newIdea)
    };

    render() {
        return (
            <tr>
                <form onSubmit={this.handleSubmit}>
                <td>
                    <input
                        name="title"
                        type="text"
                        onChange={this.handleChange} />
                    </td>
                <td>
                    <Button type="submit" bsStyle="success">Add task</Button>
                </td>
                </form>
            </tr>
        )
    };

}

export default TaskNewForm