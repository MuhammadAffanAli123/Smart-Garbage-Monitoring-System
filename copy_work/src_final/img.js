import React, { Component } from 'react';
import './App.css';
import CaptureImage from './images'
// Importing ml5.js as ml5
import * as ml5 from "ml5";
import Webcam from "react-webcam";
import we from './we.jpg';
import tiger from  './tiger.jpg';
import  {BrowserRouter as Router , Route ,Link} from 'react-router-dom'
import  firebase from "./firebase";

const db= firebase.firestore();


class Image extends Component {
  
  constructor(props)
  { 
    super(props)
  this.state = {  
    predictions: [] ,
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
    classifier.predict(image, 10, function(err, results) {
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
    
    
     await this.classifyImg();
   
    
    
    
     }

     saverecord = ()=>{
        var image=this.props.picture;
        var latitude= this.props.cords.latitude;
        var longitude = this.props.cords.longitude
        var p=document.getElementById("p1").innerHTML;
        console.log(p,"ppppppppppppppp")
         if(p == "There is no garbag")
         { 
            db.collection("garbage").add({ latitude,longitude,image,p
            })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
                alert("your record has been saved")
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
     }
        else 
        {

        
            alert("you can not Save data becuase there is no garbgage in picture")
            console.log("no enter data")
                 
        }

        
            }
  
       
     
  render() {
    
var q=document.getElementById("p1");
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
console.log(w,"wwwwwwwww")
res =w.match(/garbage/gi);
var res12=w.match(/plastic bag/gi)
var res1=w.match(/headland/gi)
var res2=w.match(/trash/gi)
var res3=w.match(/litter/gi)
var res4=w.match(/wastebin/gi)
var res5=w.match(/ashcan/gi)
var res7=w.match(/ashbin/gi)
var res8=w.match(/seashore/gi)
var res6=w.match(/coast/gi)
var res9=w.match(/waste/gi)
var res10=w.match(/dustbin/gi)
var res13=w.match(/cassette/)
var res11=w.match(/gabage Can/gi)
console.log(res,"resss");

console.log(w,"wwwwwwwwwwwwwwww")
console.log(res4,"ressdfo")
console.log(res6,"ress66666")
if( res1 )
{
//   alert('not gabage')
//   q.style.visibility = "hidden";

  q.innerHTML= ""+"there  is  garbage 1"+""
  
}
else if(res2)
{
 
 
  q.innerHTML=""+"there  is  garbage "+""
  
   
}
else if(res13)
{
 
 
  q.innerHTML=""+"there  is  garbage "+""
  
   
}
else if(res9)
{
 
 
  q.innerHTML=""+"there  is  garbage "+""
  
   
}
else if(res)
{
 
 
  q.innerHTML=""+"there  is  garbage "+""
  
   
}
else if(res3)
{
  
  q.innerHTML=res3+"there  is   garbage "+""
   
}
else if(res12)
{
  
  console.log(res2,"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
  q.innerHTML=res12+"there  is  garbage "+""
   
}
else if(res5)
{
  
  q.innerHTML=res5+"there  is  garbage 5 "+""
   
}
else if(res4)
{

  q.innerHTML=res4+"there  is  gabage 6  "+""
   
}
else if(res6)
{
  
  q.innerHTML=""+"there  is  garbage 7 "+""
   
}
else if(res7)
{


  q.innerHTML=res7+"there  is  garbage 7 "+""
   
}
else if(res8)
{


  q.innerHTML=""+"there  is  garbage 8"+""
   
}
else if(res10)
{


  q.innerHTML=""+"there  is  garbage 8"+""
   
}
else if(res11)
{ 


  q.innerHTML=""+"there  is  garbage 8"+""
   
}
else if (!res && !res1 && !res2 && !res3 && !res4 && !res5 && !res6 && !res7 && !res8&& !res9 && !res13 && !res11 && !res10 && !res12){
  q.innerHTML=""
  q.innerHTML="There is no garbag"
}
  
 




        return (
          <div key={ i + "" }>{ i+1 }. Prediction: { className } at { probability } </div>
        )
      })
    }
    
 
 
    


   
    

    return (
      <div className="App">
      <h1>GARBAGE CLASSIFICATION THROUGH AI</h1>
      {/* <iframe src={ this.props.picture }" allow="camera; microphone;"/> */}
      <img src={this.props.picture} id="image" width="400" alt="" />
      {/* <img src={we} id="image" width="400" alt="" /> */}
      {/* { predictions } */}
      <div   id="searchtext">
      <p  id="p1" >


        
        </p>
      </div>
    
      { q != "" && <Link  to="/dashboard">  < button  className='btn btn-primary' onClick={this.saverecord}>save photo</button> </Link>}
      </div>
     
      
    );
  }
}

export default Image;
