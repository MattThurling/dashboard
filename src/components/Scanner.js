import React, { useState } from 'react'
import { Grid, Card, Typography } from '@material-ui/core'
import Switch from '@material-ui/core/Switch';

export default props => {

  const [cameraId, setCameraId] = useState('')

  const showScanner = () => {
    const Dynamsoft = window.Dynamsoft;
    let scanner = null;
    Dynamsoft.BarcodeScanner.createInstance({
        UIElement: document.getElementById('video-container'),
        onUnduplicatedRead: (txt, result) => {handleScan(txt);}
    }).then(s => {
        scanner = s;
        getCamera()
        scanner.show().then(() => scanner.play(cameraId))
        .catch(ex=>{
            console.log(ex);
            alert(ex.message || ex);
            scanner.hide();
        });
    });
  };

  const handleScan = (t) => {
    window.location.href = '/product?gtin=' + t
  }

  // Workaround for multi camera phones.
  // Detects the available cameras and chooses the last avaialable video input
  // Necessary for Huawei P20
  // TODO Check on other multicam phones, inc iPhone X
  const getCamera = () => {
    navigator.mediaDevices.enumerateDevices().then(function (devices) {
        let id = ''

        for(var i = 0; i < devices.length; i ++){
            var device = devices[i];
            console.log(device)
            if (device.kind === 'videoinput') {
                id = device.deviceId;
              }
        };
        return id
    })
    .then(i => setCameraId(i))
  }


  return (

    <Grid container spacing={5} style={{ padding: 20 }} alignItems="stretch">

      <Grid item xs={12} lg={4}>
        <Card align="center" style={{ height: '100%' }}>
          <Typography variant="overline">
              Scanner
          </Typography>
          <Switch onClick={() => { showScanner() }} />
          <video
            id='video-container'
            className='dbrScanner-video'
            style={{ width: '90%', paddingTop: 20 }}></video>
        </Card>
          
      </Grid>
        
    </Grid> 
     
  );

}

