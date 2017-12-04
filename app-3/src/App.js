import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(){
  super()

  this.state = {
    filterString: "",
    foods: [
      'devin',
      'chris',
      'ben',
      'christopher',
      'dylan'
    ]
  }

}
handleChange( filter ) {
  this.setState({ filterString: filter })
}


  render() {

    let foodsToDisplay = this.state.foods.filter( (element, index) => {
      return element.includes( this.state.filterString );
    }).map( (element, index) => {
      return <h2 key={ index }>{ element }</h2>
    })

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
        <input onChange={(e) =>this.handleChange(e.target.value)}/>
        {foodsToDisplay}</div>

      </div>
    );
  }
}

export default App;
