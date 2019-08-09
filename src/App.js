import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';

import firebase from 'firebase';


class App extends Component {
  constructor() {
    super()

    const user = JSON.parse(localStorage.getItem('user'))

    this.state = {
      user: user || {},
    }
  }


  // componentDidMount(){
  //   this.database.on('value', snap=> {
  //     this.setState({
  //       speed: snap.val()
  //     });
  //   });
  // }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">

        <Main></Main>
        </header>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
