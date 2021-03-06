import React from 'react'
import { Card, Typography } from '@material-ui/core'

export default props => {
    return(

            <Card align="center">
                <Typography variant="overline">
                    <span role="img" aria-label="warning">⚠️</span>
                </Typography>

                <Typography variant="body1">
                    {props.message}
                </Typography>


            </Card>
        )
}