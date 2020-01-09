import React, { Component } from 'react'
import { Typography } from '@material-ui/core'

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
      <div>
        <Typography variant="h4" component="h1">
          Barcode Scan
        </Typography>

        <Typography variant="body1">
        <p>Sapling AI can already provide the best available carbon footprint estimates for over 35,000 products. Try it out by scanning a barcode. (This demo is currently optimised for well known UK food and drink brands and Tesco own brand items)</p>
      </Typography>

        <video
          id='video-container'
          className='dbrScanner-video'
          style={{ width: '90%', paddingTop: 20 }}>
        </video>
      </div>

    )
  }
}

export default Scanner

