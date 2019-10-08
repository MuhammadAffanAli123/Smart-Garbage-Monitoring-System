
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import  firebase from "./firebase";
import Image from './images'
import './header.css'
import Account from './account';
import  {BrowserRouter as Router , Route ,Link} from 'react-router-dom'
import First from './first';
import Admin from './admin';
import back from './back.jpg'
const db= firebase.firestore();
var auth = firebase.auth()


class Header extends Component {
  constructor(props) {
    super(props);
    
    this.myFunction=this.myFunction.bind(this)
    
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
 
  

  
  render() {
    return (
      <div className="App"  >
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
        <a href="javascript:void(0);" className="icon" onClick={this.myFunction}>☰</a>
      </div>
      
      </div>
    );
  }
}

export default Header;