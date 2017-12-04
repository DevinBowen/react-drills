import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Todo from './Todo';

class App extends Component {
constructor() {
  super()

  this.state = {
    tasks: ''
  }
}



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <h1>To-Do List</h1>
                <input />
                <button>ADD</button>
      </div>
    );
  }
}

export default App;
