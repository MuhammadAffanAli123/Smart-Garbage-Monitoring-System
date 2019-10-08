
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

const db= firebase.firestore();
var auth = firebase.auth()


class App extends Component {
  constructor(props) {
    super(props);
    
  }
 
  

  
  render() {
    return (
      <div className="App"  >
        {/* <Load /> */}
        <div>
        <Router>
        <Route exact path="/" component={First}  />
        <Route exact path="/user" component={Account} />
       <Route exact path="/admin" component={Admin} />
       <Route exact path="/image" component={CaptureImage} />
       <Route exact path="/dashboard" component={Dashboard} />
        </Router>
        
       </div>

      
      </div>
    );
  }
}

export default App;