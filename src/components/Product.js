import React, { useState, useEffect, Fragment } from 'react'
import { Grid, Typography } from '@material-ui/core'
import axios from 'axios'
import CarbonPanel from './CarbonPanel'
import MacroPanel from './MacroPanel'
import Scanner from './Scanner'

export default props =>  {
    // Set an initial state for the current product so it can render something before the API call
    const initialCurrentProduct = {
            carbon_footprint: {
                milligrams: 0
        }
    }

    // Are there parameters in the URL, ie are we going to a specific product page?
    // If so, let's get those values and use them to set the initial state
    // This should run whenever the component is mounted
    var initialProductId = {}

    new URL(document.location).searchParams.forEach((k, v) => {
        initialProductId = {keyType: k, keyValue: v}
    })


    // Create state hook pairs for both the product id and the current product
    const [productId, setProductId] = useState(initialProductId)
    const [currentProduct, setCurrentProduct] = useState(initialCurrentProduct)

    const handleScan = (g) => {
        console.log('Handling: ' + g);
        setProductId({keyType: 'gtin', keyValue: g});
        getProduct(productId.keyType, productId.keyValue)
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };

    const getProduct = (k, v) => {
        if (k && v) {
            var bodyFormData = new FormData()
            bodyFormData.set(k, v)

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
            .then(response => console.log('Product log: ' + currentProduct.description))
            .catch(error => console.log(error))
        }
    }

    useEffect(() => {
        getProduct(productId.keyType, productId.keyValue)
    }, []);

    
    
    

    const convertMg = (x) => {
        let g = Math.round(x/1000)
        return g.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div>
            <Typography variant='h4' style={{ padding: 20 }}>
                { currentProduct.description ? currentProduct.description : 'Scan a product barcode' }  
            </Typography>
            
            <Grid container spacing={5} style={{ padding: 20 }} alignItems="stretch">
                {currentProduct.description ?
                    <Fragment>
                        <Grid item xs={12} lg={4}>
                            <CarbonPanel
                                carbon={convertMg(currentProduct.carbon_footprint.milligrams)}
                                confidence={currentProduct.carbon_footprint.confidence_percent}
                            />
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <MacroPanel data={currentProduct.nutrient_milligrams}/>
                        </Grid>
                    </Fragment>
                : ''}

                <Grid item xs={12} lg={4}>
                    <Scanner handler={handleScan}
                    />
                </Grid>                
            </Grid>              
        </div>       

    )

}
