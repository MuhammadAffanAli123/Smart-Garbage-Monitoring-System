

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import  firebase from "./firebase";
import Image from './images'
import Account from './account'
import  {BrowserRouter as Router , Route ,Link} from 'react-router-dom'
import First from './first';
import Admin from './admin';
import back from './back.jpg';
import Header from './header';
import Load from './loader'
const db= firebase.firestore();
var auth = firebase.auth()


class About extends Component {
  constructor(props) {
    super(props);
    
  }
 
  

  
  render() {
    return (
      <div className="App"  >
      <h1>About</h1>
      <footer id="contact">
       <div  style={{ backgroundColor:"black" , marginTop:"0px",border:"0px solid white"}}>
         <div>
           <h5 style={{color:"white", paddingTop:"30px"}}>copy right 2019!!</h5>
           <h3 style={{color:"white", paddingLeft:"-20px", display:"none"}}>CONTACT </h3>
           <p style={{color:"white", paddingLeft:"-20px"}}>EMAIL :  projectfinalyear132@gmail.com</p>
         </div>
       </div>
      </footer>
      
  </div>
      
    );
  }
}

export default About;




