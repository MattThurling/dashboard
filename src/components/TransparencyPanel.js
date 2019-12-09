import React, { Component } from 'react'
import { Chart } from 'react-google-charts'
import { Card, Typography } from '@material-ui/core'

const data = [
  ["MacroNutrient", "Grammes"],
  ["Jun", 25],
  ["Jul", 27],
  ["Aug", 30]
];

const options = {
  is3D: false,
  legend: {position: 'none'},
  colors: ['#92C7C7'],
  'width': 200,
  'height': 200,
  'chartArea': {'width': '100%', 'height': '80%'},
};



class TransparencyPanel extends Component {

    render () {
        return(

            <Card align="center">
                <Typography variant="overline">
                    Transparency
                </Typography>

                <Chart
                  chartType="ColumnChart"
                  width="100%"
                  height="200px"
                  data={data}
                  options={options}
                />


            </Card>
        )
    }
}

export default TransparencyPanel