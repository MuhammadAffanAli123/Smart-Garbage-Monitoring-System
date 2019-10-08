import React, { Component } from 'react';
import './App.css';
import tiger from "./tiger.jpg";
import * as ml5 from "ml5";
import Webcam from "react-webcam";
import Image from './pro';


class App extends Component {
  constructor(props)
  {
    super(props)
  this.state = {
    pic:'',
    showcamera: true,
   
  }
  }

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();  
    this.setState({
      pic: imageSrc,
      showcamera : false
    })  
  };

  render()
   {
    const {pic, showcamera}=this.state
    const videoConstraints = {
      width: 1280,
       height: 720,
       facingMode: { exact: "environment" }
    };


    return (
      <div className="App">
        {  showcamera &&  < Webcam 
      height={350}
       ref={this.setRef}
      screenshotFormat="image/jpeg"
       width={350}
      videoConstraints={videoConstraints} 
      />}
     
     {showcamera && <button onClick={this.capture}>Capture photo</button> }



      {!showcamera && <Image  picture={this.state.pic}/>}

    
      
   
      </div>
    );
  }
}

export default App;
