import React from 'react'
import { Chart } from 'react-google-charts'
import { Card, Typography, Tooltip } from '@material-ui/core'

const options = {
  is3D: false,
  legend: {position: 'none'},
  colors: ['#92C7C7'],
  'width': 200,
  'height': 200,
  'chartArea': {'width': '100%', 'height': '80%'},
};



export default props => {

  return(
    <Tooltip title={props.tip} arrow>
      <Card align="center">
          <Typography variant="overline">
              {props.title}
          </Typography>

          <Chart
            chartType="ColumnChart"
            width="100%"
            height="200px"
            data={props.data}
            options={options}
          />
      </Card>
    </Tooltip>
  )
}

