import React, { Component } from 'react';
import Photo from './Photo'
// import Board from './Board'
// import v4 from 'uuid'

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
    // console.log(this.props.newImage)
    return (

        <div className= 'box'>
          <form onSubmit= {this.saveBoard}>
            {this.props.workingBoard ? <h3>{this.props.workingBoard.title}</h3> : <h3>Select or Create Board</h3>}
            {this.props.clickedCreate && <form><input className="btn btn-outline-dark" type= 'text' onChange= {this.addTitle} />
            <input type= 'submit' className="btn btn-outline-dark"  /> </form>}
            {this.props.workingBoard && this.props.workingBoard.images.map(i=><img src={i} height= '200px' width= 'auto'/>) }
            {this.props.clickedCreate && this.props.newImage.length > 1  ? this.props.newImage.map(i => <img src={i} height= '200px'/>) : <img src={this.props.newImage} height= '200px'/>}
          </form>
        </div>

    );
  }

}

//

// {this.props.images.map(image => <Photo key= {v4()} image= {image} placeImageOnBoard= {this.props.placeImageOnBoard}/>)}
// back to the future other pics "94f81396-6595-4367-a4be-d5802440134a",
// "f70c4013-532c-4894-9cb2-daef546559de",
// "a722d183-6c7a-4757-af0e-377922929920"
export default WorkingBoard;
