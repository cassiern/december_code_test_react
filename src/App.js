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
      isLogged: false
    }
  }  

  // isLoggedFunc = (data) => {
  //  this.setState({
  //    isLogged: true
  //  })
  // }

render(){
  return (
    <div className="background">
    <Navbar />
    <Auth/> 
    </div>
  );
}
}
export default App;
