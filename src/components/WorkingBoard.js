import React, { Component } from 'react';
import Photo from './Photo'
import v4 from 'uuid'

class WorkingBoard extends Component {
  state= {
    title: '',
  }
  addTitle= (event) => {
    this.setState({
      title: event.target.value
    })
  }

  saveBoard= (event) => {
    event.preventDefault()
    this.props.addSaveBoard(this.state.title)
    this.setState({
      title: ''
    })
  }

  render() {

    return (

    <form onSubmit= {this.saveBoard}>
      <div className= 'box'>
        <h1> Working Board </h1>
        {this.props.images.map(image => <Photo key= {v4()} image= {image} placeImageOnBoard= {this.props.placeImageOnBoard}/>)}
        <label> Add Title </label>
        <input className="btn btn-outline-dark" type= 'text' onChange= {this.addTitle} />

        <input type= 'submit' className="btn btn-outline-dark"  />

      </div>
    </form>
    );
  }

}

export default WorkingBoard;
