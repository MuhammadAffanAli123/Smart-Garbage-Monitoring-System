
  
  
  
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
import Dashboard from './Dashboard';
import CaptureImage from './images'
import About from './about'

const db= firebase.firestore();
var auth = firebase.auth()


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
        usersignup: true,
        usersignin: false,
        loginEmail: '',
        loginPassword: '',
        username:'',
        phonenumber:"",
        address:"",
        cnic:"",
      }

   
    this.loginemail = this.loginemail.bind(this)
    this.password = this.password.bind(this)
    this.signup = this.signup.bind(this)
    // this.renderloginup = this.renderloginup.bind(this)
    this.name=this.name.bind(this)
    
    this.PHONE=this.PHONE.bind(this)
    this.ADDRESS=this.ADDRESS.bind(this)
    this.CNIC=this.CNIC.bind(this)
    
  }

  signup() 
  {
    const {loginEmail,loginPassword,username,usersignup,usersignin,geterror} = this.state
    var email=this.state.loginEmail
    var pwd=this.state.loginPassword
    var uname=this.state.username
    var addr=this.state.username
    var nic=this.state.username
    var pnum=this.state.username
    firebase.auth().createUserWithEmailAndPassword(email, pwd)
    .then(function(res) {
        alert('Registered Successfully!');
       
        console.log('res =>', res.user.uid);

        db.collection('swiper').doc(res.user.uid).set({email,uname,pnum,nic,addr})
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


    //   this.setState({
    //     usersignin: false,
    //     usersignup:true,
    //     loginEmail:'',
    //     loginPassword: '',
    //     username:''


    //   })
      
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
  
  ADDRESS(e) {
    this.setState({
      address: e.target.value
    })
  }

  PHONE(e) {
    this.setState({
      phonenumber: e.target.value
    })
  }

  CNIC(e) {
    this.setState({
      cnic: e.target.value
    })
  }

  render() {
    return (
        
    <div className='App' style={{marginTop:"30px",backgroundImage: `url(${back})`, backgroundPosition:'center'}}>
      
    <div className='center'  style={{backgroundColor:"#82b2ed", opacity:"0.9"}}>
      <div className="panel panel-default" >
<div className="panel-heading" style={{backgroundColor:"#3486eb" , color:'white', }} >< h1 >SIGN UP</h1></div>
<div className="panel-body">
<br />
   <div className="panel panel-default" style={{backgroundColor:"#82b2ed", opacity:"0.9"}}>
   <label for="email">Name:</label>
       
      <input type="text" className="form-control" placeholder="USER NAME" value={this.state.username}
        onChange={this.name}  required
      />
     
      
       <label for="email">Email:</label>
       
      <input type="text" className="form-control" placeholder="email@domain.com" value={this.state.loginEmail}
        onChange={this.loginemail} required
      />
     
      <label for="password">Password:</label>
 
      <input type="password" class="form-control" placeholder="123456" value={this.state.loginPassword}
        onChange={this.password} required
      />
     
      <label for="Phone Number">Phone Number</label>
       <br/>
      <input type="text" className="form-control" placeholder="Phone Number" value={this.state.phonenumber}
        onChange={this.PHONE}  required
      /> 
     
      <br />
       <label for="Address">Address</label>
       <br/>
      <input type="text" className="form-control" placeholder="address" value={this.state.address}
        onChange={this.ADDRESS} required
      />
     
      <br />
      <label for="CNIC">CNIC</label>
      <br />
      <input type="password" class="form-control" placeholder="432834265523" value={this.state.cnic}
        onChange={this.CNIC} required
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
}

export default Signup;