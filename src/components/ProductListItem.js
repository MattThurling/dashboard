import React from 'react'
import { ListItem, Link } from '@material-ui/core'

// export default props => {
//     return(
//         <ListItem key={props.product.id}>
//             <Link href={"/product?tpnb=" + props.product.tpnb}>
//                 {props.product.name}
//             </Link>
//         </ListItem>
//     )
// }

export default props => {
    return(
        <ListItem key={props.product.id}>
            <Link href={'/product?gtin=9414416305528'}>
                {props.product.name}
            </Link>
        </ListItem>
    )
}