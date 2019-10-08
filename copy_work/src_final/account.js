
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import  {BrowserRouter as Router , Route ,Link} from 'react-router-dom'
import './App.css';
import  firebase from "./firebase";
import Image from './images';
import back from './back.jpg';
import Dashboard from './Dashboard';
const db= firebase.firestore();
var auth = firebase.auth()
   

class Account  extends Component {
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
    this.loginemail = this.loginemail.bind(this)
    this.password = this.password.bind(this)
    this.renderlogin = this.renderlogin.bind(this)
    this.signup = this.signup.bind(this)
    this.signin = this.signin.bind(this)
    this.renderloginup = this.renderloginup.bind(this)
    this.account = this.account.bind(this)
    this.name=this.name.bind(this)
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
        <div className="panel panel-default  " >
  <div className="panel-heading"  style={{backgroundColor:"#2ecc72" , color:'white', }} >< h1 >SIGN UP</h1></div>
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
  ///////signin block
  renderlogin() {

    return (
     
      <div>
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
  <div className="panel-heading" style={{backgroundColor:"#2ecc72" , color:'white', }} >< h1 >SIGN IN</h1></div>
  <div className="panel-body">
  <br />
     <div className="panel panel-default" style={{backgroundColor:"#DAE0E2"}}>
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
    this.setState({
      loginEmail:'',
      loginPassword: '',
      username:''


    })
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
      <div className="App"   >
        <div > 
        {usersignin && !usersignup&&  <div style={{backgroundImage: `url(${back})`, backgroundPosition:'center' , height:'600px'}}>{<this.renderloginup />}</div>}
        { usersignup && !usersignin && <div  style={{backgroundImage: `url(${back})`, backgroundPosition:'center' , height:'600px'}}>{<this.renderlogin />}</div>}
        </div>
       <div>
        {!usersignin && !usersignup && <Dashboard />}
      </div>
  </div>
    );
  }
}

export default Account;