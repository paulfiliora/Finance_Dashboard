import React, { Component } from 'react';
import axios from 'axios'

import { Grid, Row, Col, Table } from 'react-bootstrap';

import Card from 'components/Card/Card.jsx';
import Sale from 'components/Sales/Sale.jsx';
import SaleNewForm from 'components/Sales/SaleNewForm.jsx';
import {thArray} from 'variables/Variables.jsx';

class TasksView extends Component {

    state = {
        sales: []
    }

    async componentWillMount() {
        try {
            const response = await axios.get('/sales')
            this.setState({ sales: response.data })
        } catch (error) {
            console.log('Error retrieving sales data!')
            console.log(error)
        }
    }

    createSale = async (sale, index) => {
        try {
            const newSaleResponse = await axios.post(`/sales`, sale)

            const updatedSalesList = [...this.state.sales]
            updatedSalesList.push(newSaleResponse.data)
            this.setState({sales: updatedSalesList})

        } catch(error) {
            console.log('Error creating new User!')
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
                                title="New Sale"
                                category="Create a new sales record"
                                ctTableFullWidth ctTableResponsive
                                content={
                                    <SaleNewForm createSale={this.createSale}/>
                                }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Sales"
                                category="Recent sales summary"
                                ctTableFullWidth ctTableResponsive
                                content={
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                {
                                                    thArray.map((prop, key) => {
                                                        return (
                                                        <th  key={key}>{prop}</th>
                                                        );
                                                    })
                                                }
                                            </tr>
                                        </thead>
                                        {this.state.sales.map((sale, index) => {
                                                return (
                                                    <Sale
                                                    {...sale}
                                                    key={index}
                                                    index={index}/>
                                                )
                                            })
                                        }
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