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
    

    const convertMg = (x) => {
        let g = Math.round(x/1000)
        return g.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
                                carbon={convertMg(currentProduct.carbon_footprint.milligrams)}
                                confidence={currentProduct.carbon_footprint.confidence_percent}
                            />
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <MacroPanel data={currentProduct.nutrient_milligrams}/>
                        </Grid>
                    </Grid> 
                </Fragment>

            : 
                <p>Loading...</p>
            }

        </div>       

    )

}
