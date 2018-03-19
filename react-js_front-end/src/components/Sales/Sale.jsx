import React, { Component } from 'react';

export class Sale extends Component{

    render(){

        return(
            <tbody>
                <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.buyer}</td>
                    <td>{this.props.price}</td>
                    <td>{this.props.craft}</td>
                    <td>{this.props.date}</td>
                </tr>
            </tbody>
        )
    }
}

export default Sale;