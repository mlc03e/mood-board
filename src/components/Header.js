import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div className= 'header'>
        <h1> P </h1>
        <img id= 'eye' src={require('./circle.png')} alt='eye' />
        <h1>V</h1>
      </div>
    );
  }

}

export default Header;
