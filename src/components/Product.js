import React, { useState, useEffect, Fragment } from 'react'
import { Grid, Typography } from '@material-ui/core'
import axios from 'axios'
import CarbonPanel from './CarbonPanel'
import MacroPanel from './MacroPanel'

export default props =>  {


    // Create state hook pair for the current product
    const [currentProduct, setCurrentProduct] = useState({})

    useEffect(() => {

        var bodyFormData = new FormData()

        // Take the first URL parameters
        // TODO handle multiple or incorrect parameters more elegantly
        new URL(document.location).searchParams.forEach((param_value, param_type) => {
            bodyFormData.set(param_type, param_value)
        })

        axios({
            method: 'POST',
            url: 'https://footprint-dot-sapling.appspot.com/product',
            headers: {'Content-Type': 'multipart/form-data'},
            data: bodyFormData
        })
        .then(response => {
            console.log(response.data)
            setCurrentProduct(response.data)
        })
        .catch(error => console.log(error))
    },[])
    

    const converter = (x, factor) => {
        let y = Math.round(x * factor)
        return y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const nutrientEfficiency = () => {
        // TODO Assumes KG unit of measurement - probably best to do this on the back end
        const total_energy = currentProduct.qtyContents.quantity * currentProduct.calcNutrition.calcNutrients[1].valuePer100 * 10
        return converter(currentProduct.carbon_footprint.milligrams / (total_energy), 1)
    }



    return (
        <div>
            {currentProduct.description ? 
                <Fragment>
                    <Typography variant='h4' style={{ padding: 20 }}>
                        { currentProduct.description }  
                    </Typography>
                    
                    <Grid container spacing={5} style={{ padding: 20 }} alignItems="stretch">

                        <Grid item xs={12} lg={4}>
                            <CarbonPanel
                                carbon={converter(currentProduct.carbon_footprint.milligrams, 0.001)}
                                confidence={currentProduct.carbon_footprint.confidence_percent}
                            />
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <MacroPanel data={currentProduct.nutrient_milligrams} efficiency={nutrientEfficiency()} />
                        </Grid>
                    </Grid> 
                </Fragment>

            : 
                <p>Loading...</p>
            }

        </div>       

    )

}
