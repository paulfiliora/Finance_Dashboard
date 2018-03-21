import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import axios from 'axios'

import {
    dataBar,
    optionsBar,
    responsiveBar,
} from 'variables/Variables.jsx';

export class RevenueGraph extends Component {

    state = {
        monthlyRevenues: [],
        revenueSeries: [],
        costSeries: []
    }
    
    
    async componentWillMount() {
        try {
            const response = await axios.get('/monthlyRevenues')
            this.setState({ monthlyRevenues: response.data })


            var newRevenueSeries = [];
            const extractedRevenueSeries = this.state.monthlyRevenues.map(obj =>{ 
                newRevenueSeries.push(obj.revenue)
                return newRevenueSeries;
             })
             this.setState({ revenueSeries: newRevenueSeries })

             var newCostSeries = [];
             const extractedCostSeries = this.state.monthlyRevenues.map(obj =>{ 
                 newCostSeries.push(obj.cost)
                 return newCostSeries;
              })
              this.setState({ costSeries: newCostSeries })

        } catch (error) {
            console.log('Error retrieving ideas!')
            console.log(error)
        }
    }
    
    
    
    render() {
        
        let dataBar = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                this.state.revenueSeries,
                this.state.costSeries
            ]
        };

        return (
            <ChartistGraph
                data={dataBar}
                type="Bar"
                options={optionsBar}
                responsiveOptions={responsiveBar}
            />
                                    
        );
    }
}

export default RevenueGraph;