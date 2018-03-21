import React, { Component } from 'react';
import { Button, Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

export class SaleNewForm extends Component{

    
    state = {
        newSale: {}
    }

    handleChange = (event) => {
        const attributeToChange = event.target.id;
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
            <Form onSubmit={this.handleSubmit} inline>
                <FormGroup>
                    <ControlLabel>Buyer</ControlLabel>{' '}
                    <FormControl type="text" id="buyer" placeholder="Jane Doe" onChange={this.handleChange}/>
                </FormGroup>{' '}
                <FormGroup>
                    <ControlLabel>Price</ControlLabel>{' '}
                    <FormControl type="text" id="price" placeholder="$100,000" onChange={this.handleChange}/>
                </FormGroup>{' '}
                <FormGroup >
                    <ControlLabel>Craft</ControlLabel>{' '}
                    <FormControl type="text" id="craft" placeholder="Apollo13" onChange={this.handleChange}/>
                </FormGroup>{' '}
                <FormGroup >
                    <ControlLabel>Date</ControlLabel>{' '}
                    <FormControl type="text" id="date" placeholder="01-01-2001" onChange={this.handleChange}/>
                </FormGroup>{' '}
                <Button type="submit">Add Sale</Button>
            </Form>
        )
    }
}

export default SaleNewForm;