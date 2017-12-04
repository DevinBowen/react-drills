import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor() {
super()

this.state = {
  text: ""
}
}
showText(input){
  this.setState({
    text: input
  })
}



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <input onChange={(e) => this.showText(e.target.value ) } />
          <h2>{this.state.text}</h2>



      </div>
    );
  }
}

export default App;
