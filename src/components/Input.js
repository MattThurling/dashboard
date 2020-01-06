import React, { useState, useRef } from 'react'
import { Button } from '@material-ui/core'
import axios from 'axios'


export default props => {

  const fileInput = useRef(null);

  const inputClick = () => {
    fileInput.current.click()
  }

  const fileSelectedHandler = event => {
    setFileToUpload(event.target.files[0])
  }

  const fileUploadHandler = () => {
    const fd = new FormData()
    fd.append('image', fileToUpload, fileToUpload.name)
    axios.post('https://sapling.cloud/ocr', fd, {
      onUploadProgress: progressEvent => {
        console.log(progressEvent.loaded)
      }
    })
      .then(resp => {
        console.log(resp)
      })
  }

  const [fileToUpload, setFileToUpload] = useState('')

  return (

    <div>
        <input
          style={{display: 'none'}}
          type="file"
          onChange={fileSelectedHandler}
          ref={fileInput}/>
        <br />

        <Button onClick={inputClick} variant="contained">
          Choose / take a picture
        </Button>

        <Button onClick={fileUploadHandler} variant="contained">
          Upload
        </Button>

        
    </div> 
     
  )

}