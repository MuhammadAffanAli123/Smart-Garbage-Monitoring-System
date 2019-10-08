import React, { Component } from 'react';
import './App.css';
import tiger from "./tiger.jpg";
import * as ml5 from "ml5";
import Webcam from "react-webcam";
import Image from './img';
import  {BrowserRouter as Router , Route ,Link} from 'react-router-dom';


class CaptureImage extends Component {
  constructor(props)
  {
    super(props)
  this.state = {
    pic:'',
    coords :{},
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
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({coords: position.coords})
      console.log('******set position****',this.state.coords)
    }); 
  };

  render()
   {
    const {pic, showcamera}=this.state
    const videoConstraints = {
      width: 1280,
       height: 720,
      //  facingMode: { exact: "environment" }
      facingMode: "user"
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
     <br />
     {/* /<br /> */}
     {showcamera && <button onClick={this.capture} className="btn btn-primary">Capture photo</button> }



      {!showcamera && <Image  picture={this.state.pic} cords={this.state.coords}/>}

    
      
   
      </div>
    );
  }
}

export default CaptureImage;
