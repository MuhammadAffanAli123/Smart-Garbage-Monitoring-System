
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import  firebase from "./firebase";
import Image from './images'
import Account from './account'
import  {BrowserRouter as Router , Route ,Link} from 'react-router-dom'
import First from './first';
import Admin from './admin'
import Header from './header';
import Load from './loader'
const db= firebase.firestore();
var auth = firebase.auth()


class HOME extends Component {
  constructor(props) {
    super(props);
  }
 
   
  myFunction()
  {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  
  }

 
  
  componentDidMount()
  {
    var mycard12=document.getElementById("mycard");
    db.collection("garbage").get()
      
       .then(function(querysnapshot){
           querysnapshot.forEach(function(doc){
               console.log(doc.data())  
               var latlon = doc.data().latitude + "," + doc.data().longitude;
               var img_url = "https://maps.googleapis.com/maps/api/js?key='777777777777777777${doc.data().longitude}'&callback=initMap";                          
              console.log(img_url)
               mycard12.innerHTML +=`             

             <div class="card" style="width: 18rem; display: inline-block; border:2px solid; margin-top: 25px; margin-left: 10px;  ">
  <img src='${doc.data().image}' class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"> '${doc.data().p}'</h5>
    <p class="card-text">latitude:  ' ${doc.data().latitude} '
    
   <br/> 
    longitude:    '${doc.data().longitude}'
   
    </p>
  
    <div>
    <img  src=''/>
    
    </div>
  </div>
</div>
            
             `
           })
       })
   
 
    
  }
//   <img class="activator" src='${doc.data().image}' id="imgst" >

 logout=()=>{
  // alert("logout")
   localStorage.clear();
   window.location.reload();
  
   
 }

//render  
  render() {
    return (
      <div   >
        <div className="App"  >
        <div className="topnav" id="myTopnav" style={{backgroundColor:"#3486eb" , }}>
        
        <Link to="/"><a >Home</a></Link>  
        <Link to="/admin"> <a  onClick={this.logout}> LOGOUT </a> </Link> 
         <Link to="/"> <a href="#contact">Contact</a> </Link> 
        
        <Link to="/about">  <a >About</a></Link>  
         
          <a href="javascript:void(0);" className="icon" onClick={this.myFunction}>☰</a>
         
        </div> 
         
        <div id="home">
       <h1   style={{color:'white'}}>ALL IMAGES OF GARBAGE</h1>

     
     
       </div>
       <div id='mycard'></div>
       </div>
       {/* <footer id="contact">
       <div  style={{ backgroundColor:"black" , marginTop:"0px",border:"0px solid white"}}>
         <div>
           <h5 style={{color:"white", paddingTop:"30px"}}>copy right 2019!!</h5>
           <h3 style={{color:"white", paddingLeft:"-20px", display:"none"}}>CONTACT </h3>
           <p style={{color:"white", paddingLeft:"-20px"}}>EMAIL :  projectfinalyear132@gmail.com</p>
         </div>
       </div>
      </footer> */}
      
      </div>
    );
  }
}

export default HOME;