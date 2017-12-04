import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Image from './Image';

class App extends Component {
  constructor() {
    super()

    this.state = {

    }
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Image img={'https://vignette.wikia.nocookie.net/vsbattles/images/a/ac/Tree.png/revision/latest?cb=20170515233039'} />

      </div>
    );
  }
}

export default App;
