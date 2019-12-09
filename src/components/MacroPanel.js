import React from 'react'
import { Chart } from 'react-google-charts'
import { Card, Typography } from '@material-ui/core'



export default props => {

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

  // Filter the nutrients object for the main macronutrients (and convert to array)
  const filtered = Object.entries(props.data).filter(nutrient => ['Fat', 'Carbohydrate', 'Protein'].includes(nutrient[0]))

  filtered.unshift(units)
    
  // Calculate nutrient efficiency score

  return(
   <Card align="center">
          <Typography variant="overline">
              Nutrition Efficiency
          </Typography>
          <table>
            <tbody>
              <tr>
                <td style={cellStyle}>
                    <Chart
                      chartType="PieChart"
                      width="100%"
                      height="400px"
                      data={filtered}
                      options={options}
                    />
                  <Typography style={labelStyle} variant="h4">
                    {props.efficiency}
                  </Typography>
                  <Typography style={subLabelStyle} variant="body1">
                    mg CO2e per kcal
                  </Typography>

                </td>
              </tr>
            </tbody>
          </table>
      </Card>
  )
}

