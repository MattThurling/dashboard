import React, { Component } from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import Confidence from './Confidence'

class CarbonPanel extends Component {

    render () {

        const { carbon, confidence } = this.props

        console.log(confidence)
        var color = 'red'
        var type = 'warning'
        var message = 'Low confidence estimate'


        if (confidence > 33) {
            color = 'amber'
            message = 'Medium confidence estimate'
        }

        if (confidence > 66) {
            color = 'green'
            type = 'verified'
            message = 'High confidence estimate'
        }

        return(

            <Card align="center" style={{ height: '100%', width: '100%' }}>
                <Typography variant="overline">
                    Carbon Footprint
                </Typography>

                <Typography variant="h2" style={{ paddingTop:'100px' }}>
                    {carbon}
                </Typography>
                <Typography variant="body1">
                    g CO2 equivalent
                </Typography>
                <CardContent>
                    <Confidence iconType={type} color={color} message={message} />
                </CardContent> 

            </Card>
        )
    }
}

export default CarbonPanel