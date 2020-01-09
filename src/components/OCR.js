import React, { useState } from 'react'
import { Typography } from '@material-ui/core'
import Upload from './Upload'

export default props => {

  const setText = (r) => {
    setTextResults(r.data.vision_text)
  }

  const clearUp = () => {
    setTextResults('')
  }

  const [textResults, setTextResults] = useState('')

  return (

    <div>
      <Typography variant="h4" component="h1">
        Optical Character Recognition
      </Typography>

      <Typography variant="body1">
        <p>Sapling AI is learning to detect carbon footprints by simply 'looking' at documents, unstructured data and packaging. Just like humans, but <strong>much</strong> quicker.</p>
        <p>Try it out by taking a picture of a product. (This demo is currently optimised for mobile devices)</p>
      </Typography>

      <Upload responseHandler={setText} refreshHandler={clearUp} />
      <Typography variant="h6" color="primary" style={{ paddingTop:'15px' }}>{textResults ? 'Results' : ''}</Typography>
      <Typography variant="body1">{textResults}</Typography>
    </div>
  )

}
