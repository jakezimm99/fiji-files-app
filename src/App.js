import React, { Component } from 'react';
import './App.css';
import Main from './Main';


class App extends Component {
  constructor() {
    super()

    const user = JSON.parse(localStorage.getItem('user'))

    this.state = {
      user: user || {}
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        <Main></Main>
        </header>
      </div>
    );
  }
}

export default App;
