import React, { Component } from 'react';
import './App.css';
import tiger from "./tiger.jpg";
import * as ml5 from "ml5";
import Webcam from "react-webcam";
import  firebase from "./firebase";
import  {BrowserRouter as Router , Route ,Link} from 'react-router-dom';

const db= firebase.firestore();

class Image extends Component {
  constructor() {
    super()
    this.state = {
      pic:'',
      showcamera:true,
      coords :{},
      predictions: []  // Set the empty array predictions state
  
    }
    this.myFunctio=this.myFunctio.bind(this)
    
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


  setPredictions = (pred) => {
    // Set the prediction state with the model predictions
    this.setState({
      predictions: pred
    });
  }

  classifyImg = () => {
    // Initialize the Image Classifier method with MobileNet
    const classifier = ml5.imageClassifier('MobileNet', modelLoaded);
    // When the model is loaded
    function modelLoaded() {
      console.log('Model Loaded!');
    }
    // Put the image to classify inside a variable
    const image = document.getElementById('image');
    // Make a prediction with a selected image
    classifier.predict(image, 5, function(err, results) {
    // Return the results
      return results;
    })
      .then((results) => {
        // Set the predictions in the state
        this.setPredictions(results)
      })
  }

  componentDidUpdate(){
    // once the component has mount, start the classification
    this.classifyImg();
  }

  saverecord = ()=>{
    var image=this.state.pic;
    var latitude= this.state.coords.latitude;
    var longitude = this.state.coords.longitude
    db.collection("garbage").add({ latitude,longitude,image
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
        
  
        }

        myFunctio = () =>
        {
          var x = document.getElementById("myTopnav");
          if (x.className === "topnav") {
            x.className += " responsive";
          } else {
            x.className = "topnav";
          }
        
        }


  render() {
    const {pic, showcamera}=this.state
    const videoConstraints = {
      facingMode: { exact: "environment" }
    };
    
    // First set the predictions to a default value while loading
    let predictions = (<div className="loader"></div>);
    // Map over the predictions and return each prediction with probability
    if(this.state.predictions.length > 0){
      predictions = this.state.predictions.map((pred, i) => {
        let { className, probability } = pred;
        // round the probability with 2 decimal
        probability = Math.floor(probability * 10000) / 100 + "%";
        return (
          <div key={ i + "" }>{ i+1 }. Prediction: { className } at { probability } </div>
        )
      })
    }

  
    return (
      <div className="App">
         <div className="topnav" id="myTopnav">
      
         
      <a   href={<this.Admin />} className="active">Home</a> 
    
     
      
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <div className="dropdown">
          <button className="dropbtn">Dropdown 
            <i className="fa fa-caret-down" />
          </button>
          <div className="dropdown-content">
            <a href="#">llink 1</a>
            <a href="#">Llink 2</a>
            <a href="#">Llink 3</a>
          </div>
        </div> 
        <a href="#about">About</a>
        <h1 style={{display:'inlline', color:'white'}}>WELCOME TO KARACHI</h1>
        <a href="javascript:void(0);" className="icon" onClick={this.myFunctio}>☰</a>
      </div>
          {showcamera && < Webcam 
      height={400}
       ref={this.setRef}
      screenshotFormat="image/jpeg"
       width={350}
      videoConstraints={videoConstraints} 
      />}

<br />
     {showcamera &&  <button  className='btn btn-primary' onClick={this.capture}>Capture photo</button>}
       {/* <img src={this.state.pic} /> */}
    
      <img src={ tiger } id="image" width="400" alt="" />

      { predictions }
      <br />
      <br/>
     { !showcamera && <Link to="/dashboard"> < button  className='btn btn-primary' onClick={this.saverecord}>save photo</button></Link>}
      </div>
    );
  }
}

export default Image;



