
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import  firebase from "./firebase";
import Image from './images';
import back from './back.jpg';
import Homes from './homes.js'
import CaptureImage from './images'

import  {BrowserRouter as Router , Route ,Link} from 'react-router-dom';
const db= firebase.firestore();
var auth = firebase.auth()
var provider = new firebase.auth.FacebookAuthProvider();

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
     
      usersignup: true,
      usersignin: false,
      loginEmail: '',
      loginPassword: '',
      username:'',
    }
  

    //login 
    this.myFunction=this.myFunction.bind(this)
    this.loginemail = this.loginemail.bind(this)
    this.password = this.password.bind(this)
    this.renderlogin = this.renderlogin.bind(this)
    this.signup = this.signup.bind(this)
    this.signin = this.signin.bind(this)
    this.renderloginup = this.renderloginup.bind(this)
    this.account = this.account.bind(this)
    this.name=this.name.bind(this)
    this.fb=this.fb.bind(this)
  }

  fb()
  {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var users = result.user;
      var namess= users.displayName
      var url=users.photoURL
      console.log("user ====>>> ", users.displayName)
      this.setState({
        usersignup: false,
        usersignin: false,
        loginEmail:'',
         loginPassword:''
      })
      // ...p
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });

  }
 
  password(e) {
    const em = e.target.value
    this.setState({
      loginPassword: em
    })
  }
  loginemail(e) {
    this.setState({
      loginEmail: e.target.value
    })
  }
  name(e) {
    this.setState({
      username: e.target.value
    })
  }
  renderloginup() {
    return (
      <div className='App'>
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
      <div className='center'  style={{backgroundColor:"#DAE0E2"}}>
        <div className="panel panel-default" >
  <div className="panel-heading" style={{backgroundColor:"#2ecc72" , color:'white', }} >< h1 >SIGN UP</h1></div>
  <div className="panel-body">
  <br />
     <div className="panel panel-default" style={{backgroundColor:"#DAE0E2"}}>
     <label for="email">Name:</label>
         <br/>
        <input type="text" className="form-control" placeholder="USER NAME" value={this.state.username}
          onChange={this.name}
        />
       
        <br />
         <label for="email">Email:</label>
         <br/>
        <input type="text" className="form-control" placeholder="email@domain.com" value={this.state.loginEmail}
          onChange={this.loginemail}
        />
       
        <br />
        <label for="password">Password:</label>
        <br />
        <input type="password" class="form-control" placeholder="123456" value={this.state.loginPassword}
          onChange={this.password}
        />
        <br />
        <br /> <br /> 
        {console.log(this.state.loginEmail)}
        <button className="btn-success btn-lg" id="button" onClick={this.signup}>SIGN UP</button>
        <br />
        <br />
        <br />
        </div>
  </div>

        
</div>
                    
        {console.log(this.state.loginEmail)}
       
      </div>
      </div>
    );
  }



  signup() 
  {
    const {loginEmail,loginPassword,username,usersignup,usersignin,geterror} = this.state
    var email=this.state.loginEmail
    var pwd=this.state.loginPassword
    var uname=this.state.username
    firebase.auth().createUserWithEmailAndPassword(email, pwd)
    .then(function(res) {
        alert('Registered Successfully!');
       
        console.log('res =>', res.user.uid);

        db.collection('client').doc(res.user.uid).set({email,uname})
        .then(() => {
            console.log('Added in db');
           
             
    
          
         })
         .catch((e) => {
             console.log('error Adding in db');
         })
    })
    .catch(function(error) {
         //Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         console.log(errorMessage);
         alert(errorMessage)
        
      });


      this.setState({
        usersignin: false,
        usersignup:true,
        loginEmail:'',
        loginPassword: '',
        username:''


      })
      
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
 

  ///////signin block
  renderlogin() {

    return (
     <div className='App'>
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
      <div className='center'   style={{backgroundColor:"#DAE0E2"}}>

        
        <div className="panel panel-default" >
  <div className="panel-heading" style={{backgroundColor:"#2ecc72" , color:'white', }} >< h1>GARBAGE COLLECTORS</h1></div>
  <div className="panel-body">
  <br />
  <div className='fb_button'> 
  <button onClick={this.fb}>LOGIN WITH Facebook</button>
  </div>
  <br />
     <div className="panel panel-default" style={{backgroundColor:"#DAE0E2", }}>
       <br/>
      
       <div className="panel-heading" style={{backgroundColor:"#2ecc72" , color:'white', }} >< h1 >ACCOUNTS</h1></div>
         <label for="email">Email:</label>
         <br/>
        <input type="text" className="form-control" placeholder="email@domain.com" value={this.state.loginEmail}
          onChange={this.loginemail}
        />
       
        <br />
        <label for="password">Password:</label>
        <br />
        <input type="password" class="form-control" placeholder="123456" value={this.state.loginPassword}
          onChange={this.password}
        />
        <br />
        <br /> <br /> 
        {console.log(this.state.loginEmail)}
        <button className="btn-success btn-lg" id="button" onClick={this.signin}>SIGN IN</button>
        <br />
        <br />
        <br />
        </div>
  </div>

        
</div>
       {/* <label for='account'>Create An Account !!</label> */}
        <button  className="btn-link"onClick={this.account} style={{border:'none'  }}>Create An Account !!</button>
      </div>
      </div>
    );
  }
  account() {
    const { usersignup, usersignin } = this.state
    this.setState({
      usersignup: false,
      usersignin: true
    })
  }

  signin() {
    const { loginEmail, loginPassword, usersignin ,usersignup} = this.state
      var mail=this.state.loginEmail
      var pass=this.state.loginPassword
    firebase.auth().signInWithEmailAndPassword(mail,pass)
    .then((res)=>{
        alert("successfully signin");
        this.setState({
          usersignup: false,
          usersignin: false,
          loginEmail:'',
           loginPassword:''
        })
       
    })

    .catch((e) => {
        alert('NO RECORD FOUND',e);
    })
    
    .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    // ...
    });

   

  }

  
  render() {
    const {  usersignin, usersignup} = this.state
    return (
      <div className="App"  style={{backgroundImage: `url(${back})`, backgroundPosition:'center' ,}}>
        {usersignin && !usersignup&& <this.renderloginup />}
        { usersignup && !usersignin &&<this.renderlogin />}
        {!usersignin && !usersignup && <Homes />}

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

export default Admin;