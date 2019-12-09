import React, { Fragment } from 'react'
import { Grid, Card } from '@material-ui/core'
import FootprintPanel from './FootprintPanel'
import NutritionPanel from './NutritionPanel'
import TransparencyPanel from './TransparencyPanel'
import ProductList from './ProductList'

export default props => {
    return(
        <Fragment>
            <Grid container spacing={5} style={{ marginBottom: '15px'}} >

                <Grid item xs={12} lg={4} >
                     <FootprintPanel />
                </Grid>

                <Grid item xs={12} lg={4}>
                    <NutritionPanel />
                </Grid>

                <Grid item xs={12} lg={4}>
                    <TransparencyPanel />
                </Grid>

            </Grid>

            <Card xs={12}>
                <ProductList />

            </Card>

        </Fragment>

    )
}