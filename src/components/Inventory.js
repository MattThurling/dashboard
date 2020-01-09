import React, { Fragment } from 'react'
import { Grid, Card, Typography } from '@material-ui/core'
import ChartPanel from './ChartPanel'
import ProductList from './ProductList'

export default props => {

    const data ={carbon:
                    [
                      ["MacroNutrient", "Grams"],
                      ["Jun", 30],
                      ["Jul", 29],
                      ["Aug", 25]
                    ],
                efficiency:
                    [
                      ["MacroNutrient", "Grams"],
                      ["Jun", 25],
                      ["Jul", 27],
                      ["Aug", 30]
                    ],
                tranparency:
                    [
                      ["MacroNutrient", "Grams"],
                      ["Jun", 80],
                      ["Jul", 82],
                      ["Aug", 83]
                    ],
                };

    return(
        <Fragment>
          <Typography variant="h4" component="h1">
            Welcome
          </Typography>

          <Typography variant="body1" style={{ marginBottom: '25px'}}>
            <p>Sapling AI can analyse large inventories, intelligently filling in the missing data and providing ever more accurate and valuable sustainability insights. The charts below are dummy. The product links are live and demonstrate our simple, accessible metrics for the food and drink sector.</p>
          </Typography>
            <Grid container spacing={5} style={{ marginBottom: '15px'}} >

                <Grid item xs={12} lg={4} >      
                    <ChartPanel
                        title='Carbon Footprint'
                        tip='Total CO2e emissions of the organisation (dummy data)'
                        data={data.carbon} />
                </Grid>

                <Grid item xs={12} lg={4}>
                    <ChartPanel
                        title='Nutrition Efficiency'
                        tip='Average amount of CO2e emitted per unit of nutrition (dummy data)'
                        data={data.efficiency} />
                </Grid>

                <Grid item xs={12} lg={4}>
                    <ChartPanel
                        title='Transparency'
                        tip='Accuracy of sustainability estimates (dummy data)'
                        data={data.tranparency} />
                </Grid>

            </Grid>

            <Card xs={12}>
                <ProductList />

            </Card>

        </Fragment>

    )
}