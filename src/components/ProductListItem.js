import React from 'react'
import { ListItem, Link } from '@material-ui/core'


export default props => {
    const { product } = props
    return(
        <ListItem key={product.id}>
            <Link href={'/product?tpnb=' + product.tpnb}>
                {product.name}
            </Link>
        </ListItem>
    )
}