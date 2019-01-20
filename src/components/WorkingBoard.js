import React, { Component } from 'react';
import Photo from './Photo'
import v4 from 'uuid'

class WorkingBoard extends Component {

  render() {

    console.log(this.props.images)
    return (



      <div className= 'box'>
        <h1> Working Board </h1>
        {this.props.images.map(image => <Photo key= {v4()} image= {image} placeImageOnBoard= {this.props.placeImageOnBoard}/>)}

        <button className="btn btn-outline-dark" onClick= {this.props.saveBoard}> Save </button>
      </div>
    );
  }

}

export default WorkingBoard;
