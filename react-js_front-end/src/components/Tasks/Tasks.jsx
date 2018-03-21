import React, { Component } from 'react';
import axios from 'axios'
import Task from './Task.jsx'

export class Tasks extends Component{

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


    handleCheckbox = event => {
        const target = event.target;
        console.log(event.target);
        this.setState({
            [target.name]: target.checked
        });
    };
    
    render(){
        return (
            <tbody>
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

