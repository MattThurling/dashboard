import React, { useState, useRef } from 'react'
import { Button, Grid, LinearProgress, Typography } from '@material-ui/core'
import ImageIcon from '@material-ui/icons/Image';
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      },
    },
  }))

export default props => {

  const classes = useStyles();

  const fileInput = useRef(null);

  const inputClick = () => {
    fileInput.current.click()
  }

  const fileSelectedHandler = event => {
    setFileToUpload(event.target.files[0])
    props.refreshHandler()
    setProgress(-1)
  }

  const fileUploadHandler = () => {
    const fd = new FormData()
    fd.append('file', fileToUpload, fileToUpload.name)
    axios.post('https://footprint-dot-sapling.appspot.com/ocr', fd, {
      onUploadProgress: progressEvent => {
        setProgress(progressEvent.loaded)
      }
    })
      .then(resp => {
        props.responseHandler(resp)
      })
      .catch(err => {
        console.log('Error: ' + err)
      })
  }

  const [fileToUpload, setFileToUpload] = useState('')
  const [progress, setProgress] = useState(-1)

  return(
    <div className={classes.root}>
      <input
        style={{display: 'none'}}
        type="file"
        onChange={fileSelectedHandler}
        ref={fileInput}/>
      <br />

      <Button onClick={inputClick} variant="contained" color="primary">
        Choose / take a picture
      </Button>

      {fileToUpload ?
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <ImageIcon fontSize="large" color="secondary"/>
          </Grid>
          <Grid item>
            <Typography>
              {(fileToUpload.name).substr(-24)}
            </Typography>
          </Grid>
          {progress < 0 ?
            <Grid item>
              <Button onClick={fileUploadHandler} variant="contained">
                Upload
              </Button>
            </Grid>
          :
            <Grid item>
              <LinearProgress variant="determinate" value={progress} />
            </Grid>
            }
        </Grid>
      : ''}
    </div>
  )
}