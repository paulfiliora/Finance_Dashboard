import React, { Component } from 'react';
import axios from 'axios'

import { Grid, Row, Col, Table } from 'react-bootstrap';

import Card from 'components/Card/Card.jsx';
import {Tasks} from 'components/Tasks/Tasks.jsx';
import TaskNewForm from 'components/Tasks/TaskNewForm.jsx';


class TasksView extends Component {

    state = {
        ideas: []
    }

    async componentWillMount() {
        try {
            const response = await axios.get('/ideas')
            this.setState({ ideas: response.data })
        } catch (error) {
            console.log('Error retrieving ideas!')
            console.log(error)
        }
    }

    createIdea = async (idea, index) => {
        try {
            const newIdeaResponse = await axios.post(`/ideas`, idea)

            const updatedIdeasList = [...this.state.ideas]
            updatedIdeasList.push(newIdeaResponse.data)
            this.setState({ideas: updatedIdeasList})

        } catch(error) {
            console.log('Error creating new User!')
            console.log(error)
        }
    }

    handleIdeaChange = (event, index) => {
        const attributeToChange = event.target.name
        const newValue = event.target.value

        const updatedIdeasList = [...this.state.ideas]
        const ideaToUpdate = updatedIdeasList[index]
        ideaToUpdate[attributeToChange] = newValue
        
        this.setState({ideas: updatedIdeasList})
    }

    updateIdea = async (index) => {
        try {
            const ideaToUpdate = this.state.ideas[index]
            await axios.patch(`/ideas/${ideaToUpdate.id}`, ideaToUpdate)
        } catch(error) {
            console.log('Error updating idea!')
            console.log(error)
        }
    }

    deleteIdea = async (ideaId, index) => {
        try {
            await axios.delete(`/ideas/${ideaId}`)
            
            const updatedIdeasList = [...this.state.ideas]
            updatedIdeasList.splice(index, 1)
            this.setState({ideas: updatedIdeasList})

        } catch (error) {
            console.log(`Error deleting Task with ID of ${ideaId}`)
            console.log(error)
        }
    }


    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            < Card
                                title="New task"
                                category="Create a new task"
                                ctTableFullWidth ctTableResponsive
                                content={
                                    <TaskNewForm createIdea={this.createIdea}/>
                                }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Tasks"
                                category="To Do List"
                                ctTableFullWidth ctTableResponsive
                                content={
                                    <Table striped hover>
                                            <Tasks />
                                    </Table>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default TasksView;