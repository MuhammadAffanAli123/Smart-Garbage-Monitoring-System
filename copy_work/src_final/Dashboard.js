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


class Dashboard extends Component {
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
              var getid= doc.data().iduser1;                              
               mycard12.innerHTML +=`<div className="card"" style="width: 18rem; display: inline-block; margin-left:10px;" >
               <img className="card-img-top" src='${doc.data().image}' alt="Card image cap" style='border : 2px solid ;'>
               <div class="card-body" style='border: 2px solid ;'>
                 <h5 className="card-title">Card title</h5>

                 <p className="card-text"><div style='height:100px'>
                <div>
                latitude: '${doc.data().latitude} '
                longitude  '${doc.data().longitude}' 
                 </div></p>
                 <a href="#" className="btn btn-primary">Go somewhere</a>
               </div>
             </div>
             `
           })
       })
   
 
   
  }
//   <img class="activator" src='${doc.data().image}' id="imgst" >

 

//render  
  render() {
    return (
      <div className="App"  >
          <div className="topnav" id="myTopnav">
      
         
     <Link to='/image'> <button className='btn btn-primary'> TAKE PHOTO </button></Link> 
    
     
      
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
        <div>
       <h1>DASHBOARD</h1>
        
       </div>
       <div id='mycard'></div>
      
      </div>
    );
  }
}

export default Dashboard;