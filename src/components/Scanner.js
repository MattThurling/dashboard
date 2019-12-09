import React, { Component } from 'react'
import { Card, Typography } from '@material-ui/core'
import Switch from '@material-ui/core/Switch';

class Scanner extends Component {
  state = {
    cameraId: ''
  }

  showScanner() {
    const Dynamsoft = window.Dynamsoft;
    let scanner = null;
    Dynamsoft.BarcodeScanner.createInstance({
        // onFrameRead: results => {console.log(results);},
        UIElement: document.getElementById('video-container'),
        onUnduplicatedRead: (txt, result) => {this.props.handler(txt);}
    }).then(s => {
        scanner = s;
        this.getCamera()
        scanner.show().then(() => scanner.play(this.state.cameraId))
        .catch(ex=>{
            console.log(ex);
            alert(ex.message || ex);
            scanner.hide();
        });
    });
  };

  // Workaround for multi camera phones.
  // Detects the available cameras and chooses the last avaialable video input
  // Necessary for Huawei P20
  // TODO Check on other multicam phones, inc iPhone X
  getCamera() {
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
    .then(i => this.setState({cameraId: i}))
  }

  render() {
    return ( 
      <Card align="center" style={{ height: '100%' }}>
        <Typography variant="overline">
            Scanner
        </Typography>
        <Switch onClick={() => { this.showScanner() }} />
        <video
          id='video-container'
          className='dbrScanner-video'
          style={{ width: '90%', paddingTop: 20 }}></video>
      </Card> 
    );
  };
}

export default Scanner;
