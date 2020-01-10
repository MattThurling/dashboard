import React, { useState } from 'react'
import { Typography } from '@material-ui/core'
import Tree from './Tree'
import Upload from './Upload'

export default props => {

  const [data, setData] = useState({})

  const parseResponse = (r) => {
    setData(r.data)
  }

  const clearUp = () => {
    setData({})
  }

  return (

      <div>
        <Typography variant="h4" component="h1">
          Clean
        </Typography>

        <Typography variant="body1">
          <p>Sapling AI needs to be able to handle data in all shapes and sizes. We're developing a suite of NLP (natural language processing) tools, so intuitive that even non-technical staff (eg till or warehouse) can help out with dataset labelling.</p>
          <p>To get a sneak preview of one of these tools, upload a picture of a product. (This demo is optimised for desktop or laptop)</p>
        </Typography>
        <Upload responseHandler={parseResponse} refreshHandler={clearUp}/>
        {data.ingredients ?
          <div>
            <Typography variant="h6" color="primary" style={{ paddingTop:'15px' }}>Results</Typography>
            <Tree data={data} />
          </div>
        : ''
        }
      </div>
    )

}