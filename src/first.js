
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './header.css'
import  firebase from "./firebase";
import Image from './images'
import Account from './account'
import back from './back.jpg';
import  {BrowserRouter as Router , Route ,Link} from 'react-router-dom'
import Header from './header'
import { Button, } from 'react-bootstrap'
import CaptureImage from './images'
const db= firebase.firestore();
var auth = firebase.auth()




class First extends Component {
  constructor(props) {
    super(props);
    this.myFunction=this.myFunction.bind(this);
   
  }

  //modal function
  
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

      <div className="App"   style={{backgroundImage: `url(${back})`, backgroundPosition:'center' }}>
        <div className="topnav" id="myTopnav" style={{backgroundColor:"#3486eb"}}>
        
        <Link to="/"><a >Home</a></Link>  
         <Link to="/"> <a href="#contact">Contact</a> </Link> 
        
        <Link to="/about">  <a >About</a></Link>  
         
          <a href="javascript:void(0);" className="icon" onClick={this.myFunction}>☰</a>
        </div> 
         
           <div className='center'  style={{height:'550px', opacity:'0.9'}}>
             <div>
               {/* <h1 style={{color:'#516BE3'}}>
                SMART WASTE MONITERING THROUGH AI
               </h1> */}
             </div>
             <div className="uname">
             <div className="panel-heading" style={{backgroundColor:"#3486eb"  }} > <Link to='/user'><button 
           className="panel-heading" style={{backgroundColor:"#3486eb" , color:'white', height:"70px"  }}>USER</button></Link></div>

           <br />
           <br />
<div className="panel-heading" > <Link to='/admin'><button 
           className="panel-heading" style={{backgroundColor:"#3486eb" , color:'white', height:"70px"  }}>ADMIN</button></Link></div>

   
    
    </div>
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

export default First;