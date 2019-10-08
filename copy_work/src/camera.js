
  import React, { Component } from 'react';
  import './App.css';
  import tiger from './tiger.jpg'
  import qw from './qw.jpg'
  import we from './we.jpg'
  import room from './room.jpg'
  // Importing ml5.js as ml5
  import * as ml5 from "ml5";
  import Webcam from "react-webcam";
  
  
  class App extends Component {
    
    constructor()
    { 
      super()
    this.state = {
      predictions: [] ,
      response: false,
      twm:'' // Set the empty array predictions state
    }
}    
setRef = webcam => {
    this.webcam = webcam;
  };
 
  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
  };
 
  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };
 
    return (
      <div>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        />
        <button onClick={this.capture}>Capture photo</button>
      </div>
    );
  }
}
  
  export default App;
  