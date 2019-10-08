
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
import Header from './header'
import Loader from 'react-loader-spinner';
import CaptureImage from './images'
const db= firebase.firestore();
var auth = firebase.auth()


class Load extends Component {
  constructor(props) {
    super(props);
    
  }
 
  

  
  render() {
    return (
      <div className="App"  >

     <Loader 
         type="Puff"
         color="#00BFFF"
         height="100"	
         width="100" />   
        
     
       </div>
 
      
      
    );
  }
}
export default Load;