import React, {Component} from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'

class Product extends Component {
    state = {
        product: {}
    }

    constructor() {
        super()
        this.getProduct()
    }

    getProduct = () => {
        var bodyFormData = new FormData()
        bodyFormData.set('gtin', '5051140474201')

        axios({
            method: 'POST',
            url: 'https://footprint-dot-sapling.appspot.com/product',
            headers: {'Content-Type': 'multipart/form-data'},
            data: bodyFormData
        })
        .then(response => this.setState({product: response.data}))
        .then(response => console.log(this.state))
        .catch(error => console.log(error))
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <Card>
                    <Typography component="p">
                        Carbon {this.state.product.carbon_footprint_milligrams}
                    </Typography>
                </Card>
            </div>
            )
    }
}

export default Product