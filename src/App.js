import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import PhotoBoardContainer from './components/PhotoBoardContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PhotoBoardContainer />
      </div>
    );
  }
}

export default App;
