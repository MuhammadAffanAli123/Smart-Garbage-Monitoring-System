

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
  myFunction()
  {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  
  }
  
  logout=()=>{
    // alert("logout")
     localStorage.clear(); 
   }
  

  
  render() {
    return (
      <div className="App" style={{backgroundImage: `url(${back})`, backgroundPosition:'center' , backgroundRepeat:"none"}}  >
         <div className="topnav" id="myTopnav" style={{backgroundColor:"#3486eb"}}>
      
         <Link to="/">  <a >Home</a></Link>  
      <Link to='/user'> <a > Dashboard </a></Link> 
     
      
       
       <Link  to='/user'><a onClick={this.logout}>LOGOUT</a></Link>  
        <Link> <a href="#contact">Contact</a> </Link> 
       
      
        
         <a href="javascript:void(0);" className="icon" onClick={this.myFunction}>☰</a>
       </div> 
     
      <div className='App' style={{marginTop:"30px"}}>

       <h4> SMART GARBAGE SYSTEM</h4>

             <div    style={{backgroundColor:"#82b2ed", opacity:"0.9",}}>

        
        <div className="panel panel-default" >
          
  <div className="panel-body">
 
  <br />
     <div className="panel panel-default" style={{backgroundColor:"#82b2ed", opacity:"0.9" }}>
       <br/>
      
       </div>
       <h5>

       The quantity of waste generated and their potential impacts depend on multifarious factors, including the level of industrial development, the way in which wastes are managed, the existing state of the local environment and the capacity of the receiving media. Nowadays, cities with developing economies experience exhausted waste collection services, inadequately managed and uncontrolled dumpsites and the problems are worsening. The key issue of an inadequate waste management is that the garbage bin at public places gets overflowed well in advance before the commencement of the next cleaning process. Hence, we need such a system that can deracinate or at least minimize this problem to some extent. With the advancement in technology it is high time that we use technology for waste management systems. The Smart Garbage Monitoring System is a singular solution to the specific and peculiar problems in waste management sector. 
     
       </h5>
       
      </div>
      </div>
      </div>
      </div>
      <footer id="contact">
       <div  style={{ backgroundColor:"#3486eb" ,border:"0px solid white"}}>
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




