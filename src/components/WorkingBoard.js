import React, { Component } from 'react';
import Photo from './Photo'
import Board from './Board'
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
    console.log(this.props.board)
    return (

    <form onSubmit= {this.saveBoard}>
      <div className= 'box'>
        {this.props.board ? <div> <h1> {this.props.board.title} </h1> <img src= {this.props.board.image_urls} /> </div>

        : <h1> Working Board </h1>}
        <label> Add Title </label>
        <input className="btn btn-outline-dark" type= 'text' onChange= {this.addTitle} />

        <input type= 'submit' className="btn btn-outline-dark"  />

      </div>
    </form>
    );
  }

}
// {this.props.images.map(image => <Photo key= {v4()} image= {image} placeImageOnBoard= {this.props.placeImageOnBoard}/>)}
// back to the future other pics "94f81396-6595-4367-a4be-d5802440134a",
// "f70c4013-532c-4894-9cb2-daef546559de",
// "a722d183-6c7a-4757-af0e-377922929920"
export default WorkingBoard;
