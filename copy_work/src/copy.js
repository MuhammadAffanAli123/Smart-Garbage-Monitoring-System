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

 async componentDidMount(){
    // once the component has mount, start the classification
    const {response}=this.state
    
     await this.classifyImg();
    //  await this.fun();
    
    
    
     }
    

  
       
     
  render() {
    
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
  q.innerHTML="there  is no garbage in this picture"
}
else{
  // alert("there is garbage")
}
  
 





        return (
          <div key={ i + "" }>{ i+1 }. Prediction: { className } at { probability } </div>
        )
      })
    }


 
 
    


   
    

    return (
      <div className="App">
      <h1>Image classification with ML5.js</h1>
      <img src={ room } id="image" width="400" alt="" />
      {/* { predictions } */}
      <div   id="searchtext">
      <p  id="p1" >


        
        </p>
      </div>
      </div>
     
      
    );
  }
}

export default App;
