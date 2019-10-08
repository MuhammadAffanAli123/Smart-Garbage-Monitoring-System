
// import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import './App.css';
// import  firebase from "./firebase";
// import Image from './images';
// import back from './back.jpg';
// import HOME from './homes.js'
// import CaptureImage from './images'
// import Dashboard from './Dashboard'

// import  {BrowserRouter as Router ,  Redirect , Route ,Link} from 'react-router-dom';
// const db= firebase.firestore();
// var auth = firebase.auth()
// var provider = new firebase.auth.FacebookAuthProvider();

// class Account extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
     
//       usersignup: true,
//       usersignin: false,
//       loginEmail: '',
//       loginPassword: '',
//       username:'',
//       phonenumber:"",
//       address:"",
//       cnic:"",
//     }
//   this.openNav=this.openNav.bind(this)

//     //login 
//     this.myFunction=this.myFunction.bind(this)
//     this.loginemail = this.loginemail.bind(this)
//     this.password = this.password.bind(this)
//     this.renderlogin = this.renderlogin.bind(this)
//     this.signup = this.signup.bind(this)
//     this.signin = this.signin.bind(this)
//     this.renderloginup = this.renderloginup.bind(this)
//     this.account = this.account.bind(this)
//     this.name=this.name.bind(this)
//     this.fb=this.fb.bind(this)
//     this.PHONE=this.PHONE.bind(this)
//     this.ADDRESS=this.ADDRESS.bind(this)
//     this.CNIC=this.CNIC.bind(this)

//   }

//     fb()
//   {
//     firebase.auth().signInWithPopup(provider).then(function(result) {
//       // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      

//       var token = result.credential.accessToken;
//       // The signed-in user info.
//       var users = result.user;
//       var namess= users.displayName
//       var url=users.photoURL
//       console.log("user ====>>> djfjfjfjjjfjfjfj ", users.displayName)
//       this.setState({
//         usersignup: false,
//         usersignin: false,
//         loginEmail:'',
//          loginPassword:''
//       } , )
//       console.log(this.state.usersignin,this.state.usersignup, "fbbbbb")

//       // ...p
//     }).catch(function(error) {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // The email of the user's account used.
//       var email = error.email;
//       // The firebase.auth.AuthCredential type that was used.
//       var credential = error.credential;
//       // ...
//     });

//   }
 
//   password(e) {
//     const em = e.target.value
//     this.setState({
//       loginPassword: em
//     })
//   }
//   loginemail(e) {
//     this.setState({
//       loginEmail: e.target.value
//     })
//   }
//   name(e) {
//     this.setState({
//       username: e.target.value
//     })
//   }
  
//   ADDRESS(e) {
//     this.setState({
//       address: e.target.value
//     })
//   }

//   PHONE(e) {
//     this.setState({
//       phonenumber: e.target.value
//     })
//   }

//   CNIC(e) {
//     this.setState({
//       cnic: e.target.value
//     })
//   }

//   renderloginup() {
//     return (
//       <div className='App' style={{}}>
//           <div className="topnav" id="myTopnav" style={{backgroundColor:"#3486eb" , }}>
        
//         <Link to="/"><a >Home</a></Link>  
//          <Link to="/"> <a href="#contact">Contact</a> </Link> 
        
//         <Link to="/about">  <a >About</a></Link>  
         
//           <a href="javascript:void(0);" className="icon" onClick={this.myFunction}>☰</a>
         
//         </div> 
        
//       <div className='center'  style={{backgroundColor:"#82b2ed", opacity:"0.9"}}>
//         <div className="panel panel-default" >
//   <div className="panel-heading" style={{backgroundColor:"#3486eb" , color:'white', }} >< h1 >SIGN UP</h1></div>
//   <div className="panel-body">
//   <br />
//      <div className="panel panel-default" style={{backgroundColor:"#82b2ed", opacity:"0.9"}}>
//      <label for="email">Name:</label>
         
//         <input type="text" className="form-control" placeholder="USER NAME" value={this.state.username}
//           onChange={this.name}  required
//         />
       
        
//          <label for="email">Email:</label>
         
//         <input type="text" className="form-control" placeholder="email@domain.com" value={this.state.loginEmail}
//           onChange={this.loginemail} required
//         />
       
//         <label for="password">Password:</label>
   
//         <input type="password" class="form-control" placeholder="123456" value={this.state.loginPassword}
//           onChange={this.password} required
//         />
       
//         <label for="Phone Number">Phone Number</label>
//          <br/>
//         <input type="text" className="form-control" placeholder="Phone Number" value={this.state.phonenumber}
//           onChange={this.PHONE}  required
//         /> 
       
//         <br />
//          <label for="Address">Address</label>
//          <br/>
//         <input type="text" className="form-control" placeholder="address" value={this.state.address}
//           onChange={this.ADDRESS} required
//         />
       
//         <br />
//         <label for="CNIC">CNIC</label>
//         <br />
//         <input type="password" class="form-control" placeholder="432834265523" value={this.state.cnic}
//           onChange={this.CNIC} required
//         />
//         <br />
//         <br /> <br /> 
       
//         {console.log(this.state.loginEmail)}
//         <button className="btn-success btn-lg" id="button" onClick={this.signup}>SIGN UP</button>
//         <br />
//         <br />
//         <br />
//         </div>
//   </div>

        
// </div>
                    
//         {console.log(this.state.loginEmail)}
       
//       </div>
//       </div>
//     );
//   }

//    openNav = () => {
//     document.getElementById("mySidenav").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
//   }
  
//   closeNav = ()  =>{
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("main").style.marginLeft= "0";
//   }

//   signup() 
//   {
//     const {loginEmail,loginPassword,username,usersignup,usersignin,geterror} = this.state
//     var email=this.state.loginEmail
//     var pwd=this.state.loginPassword
//     var uname=this.state.username
//     var addr=this.state.username
//     var nic=this.state.username
//     var pnum=this.state.username
//     firebase.auth().createUserWithEmailAndPassword(email, pwd)
//     .then(function(res) {
//         alert('Registered Successfully!');
       
//         console.log('res =>', res.user.uid);

//         db.collection('swiper').doc(res.user.uid).set({email,uname,pnum,nic,addr})
//         .then(() => {
//             console.log('Added in db');
           
//             this.setState({
//               usersignin: false,
//               usersignup:true,
//               loginEmail:'',
//               loginPassword: '',
//               username:''
      
      
//             })
    
         
//          })
//          .catch((e) => {
//              console.log('error Adding in db');
//          })
//     })
//     .catch(function(error) {
//          //Handle Errors here.
//          var errorCode = error.code;
//          var errorMessage = error.message;
//          console.log(errorMessage);
//          alert(errorMessage)
        
//       });


     

     
//   }
//   myFunction()
//   {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
  
//   }
 

//   ///////signin block
//   renderlogin() {

//     return (
//      <div className='App' style={{}}>
//          <div className="topnav" id="myTopnav" style={{backgroundColor:"#3486eb" , }}>
        
//         <Link to="/"><a >Home</a></Link>  
//          <Link to="/"> <a href="#contact">Contact</a> </Link> 
        
//         <Link to="/about">  <a >About</a></Link>  
         
//           <a href="javascript:void(0);" className="icon" onClick={this.myFunction}>☰</a>
         
//         </div> 

//              <div className='center'    style={{backgroundColor:"#82b2ed", opacity:"0.9",}}>

        
//         <div className="panel panel-default" >
//   <div className="panel-body">
//   <br />
//   <div className='fb_button'> 
//   <button onClick={this.fb} className="btn btn-primary">LOGIN WITH Facebook</button>
//   </div>
//   <br />
//      <div className="panel panel-default" style={{backgroundColor:"#82b2ed", opacity:"0.9" }}>
//        <br/>
      
//        <div className="panel-heading" style={{backgroundColor:"#3486eb" , color:'white', }} >< h1 >ACCOUNT</h1></div>
//          <label for="email">Email:</label>
//          <br/>
//         <input type="text" className="form-control" placeholder="email@domain.com" value={this.state.loginEmail}
//           onChange={this.loginemail}
//         />
       
//         <br />
//         <label for="password">Password:</label>
//         <br />
//         <input type="password" class="form-control" placeholder="123456" value={this.state.loginPassword}
//           onChange={this.password}
//         />
//         <br />
//         <br /> <br /> 
//         {console.log(this.state.loginEmail)}
//         <button className="btn-success btn-lg" id="button" onClick={this.signin}>SIGN IN</button>
//         <br />
//         <br />
//         <br />
//         </div>
//   </div>

        
// </div>
//        {/* <label for='account'>Create An Account !!</label> */}
//         <button  className="btn-link"onClick={this.account} style={{border:'none'  }}>Create An Account !!</button>
//       </div>
//       </div>
//     );
//   }
//   account() {
//     const { usersignup, usersignin } = this.state
//     this.setState({
//       usersignup: false,
//       usersignin: true
//     })
//     localStorage.setItem("usersignup", usersignup)
//     localStorage.setItem('usersignin',usersignin)
      

//   }

//   signin() {
//     const { loginEmail, loginPassword, usersignin ,usersignup} = this.state
//       var mail=this.state.loginEmail
//       var pass=this.state.loginPassword
//     firebase.auth().signInWithEmailAndPassword(mail,pass)
//     .then((res)=>{
//         alert("successfully signin");
//         this.setState({
//           usersignup: false,
//           usersignin: false,
//           loginEmail:'',
//            loginPassword:''
//         }, )

//         console.log(this.state.usersignin,this.state.usersignup,"cheeeeekkkkekeke");
//         if( this.state.usersignin && this.state.usersignup)
//         {
//           return < Redirect to="/home" />
//         }
       
//     })

//     .catch((e) => {
//         alert('NO RECORD FOUND',e);
//     })
    
//     .catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     alert(errorMessage);
//     // ...
//     });

   

//   }

  
//   render() {
//     var userin=localStorage.getItem("usersignin")
//     var userup=localStorage.getItem("usersignup")
//     const {  usersignin, usersignup} = this.state
//     return (
//       <div className="App1"  style={{backgroundImage: `url(${back})`, backgroundPosition:'center' ,}}>
      
       
      
// {/* raza nav */}
        
         
//         {usersignin && !usersignup&& <this.renderloginup />}
//         { usersignup && !usersignin &&<this.renderlogin />}
//         {!usersignin && !usersignup && <Dashboard />}

//         <footer id="contact">
//        <div  style={{ backgroundColor:"#3486eb" , marginTop:"0px",border:"0px solid white"}}>
//          <div>
//            <h5 style={{color:"white", paddingTop:"30px"}}>copy right 2019!!</h5>
//            <h3 style={{color:"white", paddingLeft:"-20px", display:"none"}}>CONTACT </h3>
//            <p style={{color:"white", paddingLeft:"-20px"}}>EMAIL :  projectfinalyear132@gmail.com</p>
//          </div>
//        </div>
//       </footer>
//       </div>
//     );
//   }
// }

// export default Account;





import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import  firebase from "./firebase";
import Image from './images';
import back from './back.jpg';
import Dashboard from './Dashboard'
import CaptureImage from './images'

import  {BrowserRouter as Router ,    Route ,Link} from 'react-router-dom';
// import  { Redirect } from 'react-router-dom'
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
      phonenumber:"",
      address:"",
      cnic:"",
      checked: true,
      
    }
  this.openNav=this.openNav.bind(this)

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
    this.PHONE=this.PHONE.bind(this)
    this.ADDRESS=this.ADDRESS.bind(this)
    this.CNIC=this.CNIC.bind(this)
    this.handleCheck=this.handleCheck.bind(this)

  }


  handleCheck() {
    this.setState({checked: !this.state.checked});
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
      console.log("user ====>>> djfjfjfjjjfjfjfj ", users.displayName)
      this.setState({
        usersignup: false,
        usersignin: false,
        loginEmail:'',
         loginPassword:''
      } , )
      console.log(this.state.usersignin,this.state.usersignup, "fbbbbb")

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

  renderloginup() {
    return (
      <div className="App1"  style={{backgroundImage: `url(${back})`, backgroundPosition:'center' ,}}>
      <nav  >
       <div className="topnav" id="myTopnav" style={{backgroundColor:"#3486eb" , }}>
      
      <Link to="/"><a >Home</a></Link>  
       <Link to="/"> <a href="#contact">Contact</a> </Link> 
      
      <Link to="/about">  <a >About</a></Link>  
       
        <a href="javascript:void(0);" className="icon" onClick={this.myFunction}>☰</a>
       
      </div> 
      </nav>
    
      <div className='App' style={{marginTop:"30px"}}>
        
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
         
        <input type="email" id="myEmail1" name="email" pattern="[a-z0-9._%+-]+@swiper.com" className="form-control" placeholder="email@domain.com" value={this.state.loginEmail}
          onChange={this.loginemail} required
        />
        <p id="er"> 
       
        </p>
       
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
        <div>
         
        <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked} />
        <label>Are you Admin  </label>
        {console.log(this.state.checked)}
      </div>
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

   openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  closeNav = ()  =>{
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  signup() 
  {
    const {loginEmail,loginPassword,username,usersignup,usersignin,geterror} = this.state
    var email=this.state.loginEmail
    var pwd=this.state.loginPassword
    var check = this.state.checked
    var uname=this.state.username
    var addr=this.state.username
    var nic=this.state.username
    var pnum=this.state.username
    var xy = document.getElementById("myEmail1").pattern;
    var y=document.getElementById("myEmail1").value
    var x="@a.com"
    var res11=y.match(xy)
    console.log("text ha innae",y)
    console.log("xxxx",x)
    if(!res11){
      firebase.auth().createUserWithEmailAndPassword(email, pwd)
    .then(function(res) {
        alert('Registered Successfully!');
       
        console.log('res =>', res.user.uid);

        db.collection('swiper').doc(res.user.uid).set({email,uname,pnum,nic,addr,check})
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
    else
    {
      alert("wrong email pattern")
      document.getElementById("er").innerHTML=""
      document.getElementById("er").style.color= "red"
      document.getElementById("er").innerHTML="Dont match patern"

    }
     
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
      <div className="App1"  style={{backgroundImage: `url(${back})`, backgroundPosition:'center' ,}}>
   
       <div className="topnav" id="myTopnav" style={{backgroundColor:"#3486eb" , }}>
      
      <Link to="/"><a >Home</a></Link>  
       <Link to="/"> <a href="#contact">Contact</a> </Link> 
      
      <Link to="/about">  <a >About</a></Link>  
       
        <a href="javascript:void(0);" className="icon" onClick={this.myFunction}>☰</a>
       
      </div> 
   
      
     <div className='App' style={{marginTop:"30px"}}>

       <h1>WELCOME TO SURVEYIOR</h1>

             <div className='center'    style={{backgroundColor:"#82b2ed", opacity:"0.9",}}>

        
        <div className="panel panel-default" >
  <div className="panel-body">

  <br />
     <div className="panel panel-default" style={{backgroundColor:"#82b2ed", opacity:"0.9" }}>
       <br/>
      
       <div className="panel-heading" style={{backgroundColor:"#3486eb" , color:'white', }} >< h1 >ACCOUNT</h1></div>
         <label for="email">Email:</label>
         <br/>
        <input type="text" className="form-control" placeholder="email@domain.com"  id="myEmail" name="email" pattern="[a-z0-9._%+-]+@swiper.com" value={this.state.loginEmail}
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
       
        <button  type= "submit " className="btn-success btn-lg" id="button" onClick={this.signin}>SIGN IN</button>
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
  account() {
    const { usersignup, usersignin } = this.state
    this.setState({
      usersignup: false,
      usersignin: true
    })
    localStorage.setItem("usersignup", usersignup)
    localStorage.setItem('usersignin',usersignin)
      

  }

   async signin() {
    const { loginEmail, loginPassword, usersignin ,usersignup} = this.state
      var mail=this.state.loginEmail
      var pass=this.state.loginPassword

       var xy = document.getElementById("myEmail").pattern;
      var y=document.getElementById("myEmail").value
      var x="@a.com"
      var res11=y.match(xy)
      console.log("text ha innae",y)
      console.log("xxxx",x)
      if(!res11)
      {
        firebase.auth().signInWithEmailAndPassword(mail,pass)
    .then((res)=>{
        alert("successfully signin");
        // db.collection("swiper").doc(res).get(function (){
        //   console.log(res.data,"for check box check")   
        // })
        this. setState(  {
          usersignup: false,
          usersignin: false,
          // loginEmail:'',
          //  loginPassword:''
        }, )

        localStorage.setItem("usersignin", this.state.usersignin)
        localStorage.setItem("usersignup", this.state.usersignup)
       
    


      
       
    } )

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
      else{
        alert("NO RECORD FOUND")
      }
    
  }

chectauth=()=>
{
  var a=localStorage.getItem("usersignin")
  var b=localStorage.getItem("usersignup")
  console.log(a,b,"!@#$#@")
  if(a==false &&  b==false)
  {
    this.setState({
      usersignin:a,
      usersignup:b
    })
  }

}
  
  componentDidMount()
  { const {usersignin,usersignup}=this.state
  
  var a=localStorage.getItem("usersignin")
  var b=localStorage.getItem("usersignup")
  console.log(a,b,"!@#$#@")
  if(a=='false' &&  b=='false')
  {
    a=false;
    b=false
    this.setState({
      usersignin:a,
      usersignup:b
    })

  }
console.log(this.state.usersignin,this.state.usersignup,"ifffffffffffff")
   
  
  }

  
  render() {
  const {  usersignin, usersignup} = this.state

  this.chectauth();

  
  
   
    return (
        <div className="App">
         
        {usersignin && !usersignup&& <this.renderloginup />}
        { usersignup && !usersignin &&<this.renderlogin />}

        { !usersignin && !usersignup && <Dashboard />}

      
      </div>
    );
  }
}

export default Admin;


