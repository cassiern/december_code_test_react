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

  logout = async (e) => {
    e.preventDefault();

    const logoutUser = await fetch('http://localhost:9000/user/logout');
    console.log(logoutUser, '<-- LOGOUT USER COMING FROM EXPRESS')
    this.setState({
      isLogged: false,
      currentUser: {}
    })
    console.log(this.state, '<-- this is state after logging out')
  }


  getCurrentUser = (currentUser)=>{
    this.setState({
      currentUser:currentUser,
      //isLogged: true
    })
      console.log(currentUser, "<--- currentUser in APP")

  }
render(){
  return (
    <div className="background">
    <Navbar logout={this.logout}/>

      {this.state.currentUser.isLogged ?
        <Main />
        : 
        <Auth passCurrentUser = {this.getCurrentUser}/> 
      }

    </div>
  );
}
}
export default App;
