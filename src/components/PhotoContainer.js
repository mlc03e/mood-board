import React, { Component } from 'react';
import Photo from './Photo'
import v4 from 'uuid'

class PhotoContainer extends Component {

  render() {
    // console.log(this.props.images)
    return (
      <div>
        <h1>PhotoContainer</h1>
        {this.props.images.map(image => <Photo key= {v4()} image= {image} placeImageOnBoard= {this.props.placeImageOnBoard}/>)}
      </div>
    );
  }

}

export default PhotoContainer;
