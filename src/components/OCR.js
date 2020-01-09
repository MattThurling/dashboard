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
      <Upload responseHandler={setText} refreshHandler={clearUp} />
      <Typography>{textResults}</Typography>
    </div>
  )

}
