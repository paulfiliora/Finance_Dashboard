import React, { Component } from 'react';
import axios from 'axios'
import Task from './Task.jsx'

export class Tasks extends Component{

    state = {
        ideas: [],
        users: []
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


    handleCheckbox = event => {
        const target = event.target;
        console.log(event.target);
        this.setState({
            [target.name]: target.checked
        });
    };

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
    
    render(){
        return (
            <tbody>
                {/* <TaskNewForm createIdea={this.createIdea}/> */}

                    {
                        this.state.ideas.map((idea, index) => {
                            return (
                                <Task
                                {...idea}
                                key={index}
                                index={index}
                                deleteIdea={this.deleteIdea} 
                                handleIdeaChange={this.handleIdeaChange} 
                                updateIdea={this.updateIdea}
                                createIdea={this.createIdea} />
                            )
                        })
                    }
            </tbody>
        );
    }
}

export default Tasks;

