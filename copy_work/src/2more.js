import React, { Component } from 'react';
import './App.css';
import tiger from "./tiger.jpg";
// Importing ml5.js as ml5
import * as ml5 from "ml5";
import Webcam from "react-webcam";


class Image extends Component {
  state = {
    pic:'',
    showcamera:true,
    predictions: []  // Set the empty array predictions state
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
    classifier.predict(image, 1, function(err, results) {
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

  render() {
    const {pic, showcamera}=this.state
    const videoConstraints = {
      
      // facingMode: { exact: "environment" },
      // width: 1280,
      // height: 720,
      width: 1280,
       height: 720,
      facingMode: "user"
    };
    
    // First set the predictions to a default value while loading
    // let predictions = (<div className="loader"></div>);
    // // Map over the predictions and return each prediction with probability
    // if(this.state.predictions.length > 0){
    //   predictions = this.state.predictions.map((pred, i) => {
    //     let { className, probability } = pred;
    //     // round the probability with 2 decimal
    //     probability = Math.floor(probability * 10000) / 100 + "%";
    //     return (
    //       <div key={ i + "" }>{ i+1 }. Prediction: { className } at { probability } </div>
    //     )
    //   })
    // }
//copy work
var q=document.getElementById("p1");
const {response}=this.state;
var res;
var w;
let predictions = (<div className="loader"></div>);
// Map over the predictions and return each prediction with probability
if(this.state.predictions.length > 0){
  predictions = this.state.predictions.map((pred, i) => {
    let { className, probability } = pred;
    // round the probability with 2 decimal
    probability = Math.floor(probability * 10000) / 100 + "%";
    // document.getElementById('searchtext').innerHTML=predictions
    var para = document.createElement("p");
    para.setAttribute("id", "p");


var node = document.createTextNode( i+1+".pridiction:"+ className +" at "+""+ probability)

console.log(node,'$$$$$$$$$$$$$');

q.appendChild(node);
console.log(q.innerHTML,"innerrr")

w=q.innerHTML
res =w.match(/garbage/);
console.log(res,"resss")
localStorage.setItem("res",res);
console.log(w,"wwwwwwwwwwwwwwww")
console.log(res,"ressdfo")
if(!res)
{
// alert('not gabage')
//q.style.visibility = "hidden";
q.innerHTML=""
q.innerHTML="there  is no garbage in this picture";
}
else{
// alert("there is garbage")

}







    return (
      <div key={ i + "" }>{ i+1 }. Prediction: { className } at { probability } </div>
    )
  })
}











//copy work end
    return (
      <div className="App">
          {showcamera && < Webcam 
      height={350}
       ref={this.setRef}
      screenshotFormat="image/jpeg"
       width={350}
      videoConstraints={videoConstraints} 
      />}
     {showcamera &&  <button onClick={this.capture}>Capture photo</button>}
       {/* <img src={this.state.pic} /> */}
    
       

      <h1>Image classification with ML5.js</h1>
      <img src={ tiger } id="image" width="400" alt="" />
      <div   id="searchtext">
      <p  id="p1" >


        
        </p>
      </div>
      {/* { predictions } */}
      </div>
    );
  }
}

export default Image;
