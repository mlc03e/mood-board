import React, { Component } from 'react';
import Photo from './Photo'
import v4 from 'uuid'

class WorkingBoard extends Component {

  render() {
    let styles = {
      margin: '20px',
      width: '400px',
      height: '400px',
      backgroundColor: 'grey',
    };
    // console.log(this.props.images.map(image => image.id));
    return (



      <div className= 'box' style= {styles}>
        <h1> Working Board </h1>
        {this.props.images.map(image => <Photo key= {v4()} image= {image} placeImageOnBoard= {this.props.placeImageOnBoard}/>)}

        <button> Save </button>
      </div>
    );
  }

}

export default WorkingBoard;
