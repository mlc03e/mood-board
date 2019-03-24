import React, { Component } from 'react';

class Photo extends Component {

  render() {
    console.log(this.props);
    return (
      <div className= "photoContainer">

        <img id= 'photos' onClick= {()=>{this.props.placeImageOnBoard(this.props.image)}} src={this.props.image} alt="clothing"/>

      </div>
    );
  }

}

export default Photo;
