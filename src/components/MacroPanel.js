import React, { Component } from 'react'
import { Chart } from 'react-google-charts'
import { Card, Typography } from '@material-ui/core'

const units = ["MacroNutrient", "Grammes"];

const options = {
  pieHole: 0.7,
  is3D: false,
  legend: {position: 'top'},
  pieSliceText: 'none',
  'width': 200,
  'height': 350,
  'chartArea': {'width': '100%', 'height': '80%'},
};

const labelStyle = {
    position: 'absolute',
    left: '2px',
    top: '10px',
    width: '200px',
    lineHeight: '300px',
    textAlign: 'center'
}

const subLabelStyle = {
    position: 'absolute',
    left: '2px',
    top: '50px',
    width: '200px',
    lineHeight: '300px',
    textAlign: 'center'
}

const cellStyle = {
    position: 'relative',
}


class MacroPanel extends Component {

    render () {

      let d = Object.entries(this.props.data)
      d.unshift(units)
      console.log(d)
        return(

            <Card align="center">
                <Typography variant="overline">
                    Macronutrients
                </Typography>
                <table>
                  <tbody>
                    <tr>
                      <td style={cellStyle}>
                          <Chart
                            chartType="PieChart"
                            width="100%"
                            height="400px"
                            data={d}
                            options={options}
                          />
                        <Typography style={labelStyle} variant="h4">
                          0.567    
                        </Typography>
                        <Typography style={subLabelStyle} variant="body1">
                          g CO2e per kcal
                        </Typography>

                      </td>
                    </tr>
                  </tbody>
                </table>
            </Card>
        )
    }
}

export default MacroPanel