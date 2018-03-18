import React, { Component } from 'react'

class Idea extends Component {

    render() {
        return (
            <div>
                <div>
                    <input
                        name="title"
                        onChange={(event) => this.props.handleIdeaChange(event, this.props.index)}
                        onBlur={() => this.props.updateIdea(this.props.index)}
                        value={this.props.title} />
                </div>

                <div>
                    <textarea
                        name="description"
                        onChange={(event) => this.props.handleIdeaChange(event, this.props.index)}
                        onBlur={() => this.props.updateIdea(this.props.index)}
                        value={this.props.description} />
                </div>

                <div>
                    <button
                        onClick={() => this.props.deleteIdea(this.props.id, this.props.index)}>
                        Delete
                    </button>
                </div>
                <hr />
            </div>
        )
    }

}

export default Idea
