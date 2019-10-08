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
var auth = firebase.auth();
 var id1=localStorage.getItem("uid");

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
  
  welcome =()=>
  {
   

  }
  
  
  componentDidMount()
  {
   

    console.log("idddddd",id1)
    var mycard12=document.getElementById("mycard");
    db.collection("garbage").where("id","==",id1).get()
       .then(function(querysnapshot){
           querysnapshot.forEach(function(doc){
               console.log(doc.data().name, "name")                            
               mycard12.innerHTML +=`             

             <div class="card" style="width: 18rem; display: inline-block; border:2px solid; margin-top: 25px; margin-left: 10px;  ">
  <img src='${doc.data().image}' class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">latitude:  ' ${doc.data().latitude} '
   <br/>
    longitude:    '${doc.data().longitude}'
    <br/>
    Discription :    '${doc.data().p}'
    <br/>
     </p>
    
    <a href="#" class="btn btn-primary">Go somewhere</a>

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
   localStorage.clear();
  
   
 }
 

//render  
  render() {
    return (
      <div className="App"  >
        
        <div className="topnav" id="myTopnav" style={{backgroundColor:"#3486eb"}}>
      
         
      <Link to='/image'> <a > TAKE PHOTO </a></Link> 
     
      
       
       <Link  to='/user'><a onClick={this.logout}>LOGOUT</a></Link>  
        <Link> <a href="#contact">Contact</a> </Link> 
       
       <Link to="/about">  <a >About</a></Link>  
        
         <a href="javascript:void(0);" className="icon" onClick={this.myFunction}>☰</a>
       </div> 
        <div>
       <h1>DASHBOARD</h1>
        
       </div>
       <div id='mycard'></div>
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

export default Dashboard;