import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export class SaleNewForm extends Component{

    
    state = {
        newSale: {}
    }

    handleChange = (event) => {
        const attributeToChange = event.target.name;
        const newValue = event.target.value;

        const updatedNewSale = { ...this.state.newSale }
        updatedNewSale[attributeToChange] = newValue
        this.setState({ newSale: updatedNewSale })
    };

    
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createSale(this.state.newSale)
    };

    render(){

        return(
                <tr>
                    <form onSubmit={this.handleSubmit}>
                        <td>
                            <input
                                name="buyer"
                                type="text"
                                onChange={this.handleChange} />
                        </td>
                        <td>
                            <input
                                name="price"
                                type="text"
                                onChange={this.handleChange} />
                        </td>
                        <td>
                            <input
                                name="craft"
                                type="text"
                                onChange={this.handleChange} />
                        </td>
                        <td>
                            <input
                                name="date"
                                type="text"
                                onChange={this.handleChange} />
                        </td>
                        <td>
                            <Button type="submit" bsStyle="success">Add Sale</Button>
                        </td>
                    </form>
                </tr>
        )
    }
}

export default SaleNewForm;