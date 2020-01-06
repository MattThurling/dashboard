import React, { Component } from 'react'
import { Grid, Card, Typography } from '@material-ui/core'
// import Switch from '@material-ui/core/Switch';

class Scanner extends Component {

  componentDidMount() {
    const Dynamsoft = window.Dynamsoft
    let scanner = null
    Dynamsoft.BarcodeScanner.createInstance({
        UIElement: document.getElementById('video-container'),
        onUnduplicatedRead: (txt, result) => {this.handleScan(txt)}
    }).then(s => {
        scanner = s
        // getCamera()
        scanner.show()//.then(() => scanner.play(cameraId))
        .catch(ex=>{
            console.log(ex)
            alert(ex.message || ex)
            scanner.hide()
        });
    });
  }

  componentWillUnmount() {
    console.log("Time to unmount")
  }

  handleScan(t) {
    window.location.href = '/product?gtin=' + t
  }

  // Workaround for multi camera phones.
  // Detects the available cameras and chooses the last avaialable video input
  // Necessary for Huawei P20
  // TODO Check on other multicam phones, inc iPhone X
  // const getCamera = () => {
  //   navigator.mediaDevices.enumerateDevices().then(function (devices) {
  //       let id = ''

  //       for(var i = 0; i < devices.length; i ++){
  //           var device = devices[i];
  //           console.log(device)
  //           if (device.kind === 'videoinput') {
  //               id = device.deviceId;
  //             }
  //       };
  //       return id
  //   })
  //   .then(i => setCameraId(i))
  // }

  render() {
    return (

      
            
            <video
              id='video-container'
              className='dbrScanner-video'
              style={{ width: '90%', paddingTop: 20 }}>
            </video>

            

       
    )
  }
}

export default Scanner

