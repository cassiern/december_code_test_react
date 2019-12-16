import React, { Component } from 'react';
import './App.css';
import Auth from './components/Auth';
import Main from './components/Main';
import Navbar from './components/navbar/navbar';
import './public/style.css';
import './style.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      isLogged: false,
      currentUser: {}
    }
  }  

  // isLoggedFunc = (data) => {
  //  this.setState({
  //    isLogged: true
  //  })
  // }
getCurrentUser = (currentUser)=>{
  console.log(currentUser, "<--- currentUser in APP")
  this.setState({currentUser : currentUser})
}
render(){
  return (
    <div className="background">
    <Navbar />
    <Auth passCurrentUser = {this.getCurrentUser}/> 
    </div>
  );
}
}
export default App;
