import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(){
  super()

  this.state = {
    food: ["toast","burger","lasagna"]
  }

  
}




  render() {
    var displayFood = this.state.food.map( (element) => {
      return (
        <h2 >{element}</h2>     
        )
    } );


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h2>{this.state.food[0]}</h2>
        <h2>{this.state.food[1]}</h2>
        <h2>{this.state.food[2]}</h2>
        <div>{displayFood}</div>
      </div>
    );
  }
}

export default App;
