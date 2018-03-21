import React, { Component } from 'react'
import { Button, Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

class TaskNewForm extends Component {

    state = {
        newIdea: {}
    }

    handleChange = (event) => {
        const attributeToChange = event.target.id;
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
            <Form onSubmit={this.handleSubmit}>
            <FormGroup>
                <FormControl type="text" id="title" placeholder="New task" onChange={this.handleChange}/>
            </FormGroup>{' '}
            <Button type="submit">Add Task</Button>
            </Form>
        )
    };

}

export default TaskNewForm



// <tr>
// <form onSubmit={this.handleSubmit}>
// <td>
//     <input
//         name="title"
//         type="text"
//         onChange={this.handleChange} />
//     </td>
// <td>
//     <Button type="submit" bsStyle="success">Add task</Button>
// </td>
// </form>
// </tr>