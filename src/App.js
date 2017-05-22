import React, { Component } from 'react';
import './App.css';
import UserList from './components/user_list'; 

class App extends Component {
  render() {
    return (
      <div className="container">
      <div className="">
      <UserList /> 
      </div>
      </div>
    );
  }
}

export default App;
