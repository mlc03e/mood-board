import React, { Component } from 'react';
import PhotoContainer from './PhotoContainer'
import Form from './Form'
import BoardContainer from './BoardContainer'
import WorkingBoard from './WorkingBoard'
import v4 from 'uuid'

class PhotoBoardContainer extends Component {

  state= {
    images: [],
    boards: [],
    workingBoard: [],
    boardImage: [],
    startIdx: 0,
    endIdx: 4
  }
  componentDidMount() {
    Promise.all([
      fetch('http://localhost:3000/images'),
      fetch('http://localhost:3000/boards')
  ])
    .then(([res1, res2 ])=> Promise.all([res1.json(), res2.json()]))
    .then(([images, boards]) => this.setState({
      images,
      boards
    }))
  }
  newImage= (URL, keyWords) => {
    const newPic = {id: v4(), url: URL, keyWords: keyWords.split(',')}
    this.setState({
      images: [...this.state.images, newPic]
    })
    fetch('http://localhost:3000/images', {method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newPic)
    })

  }
  showBoard = (board) => {
    this.setState({
      workingBoard: board
    })
  }



  createBoard= (newBoard) => {
    fetch('http://localhost:3000/boards', {method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        title: [],
        images: []
      })
    })
    .then(response => response.json())
    .then(newBoard=> this.setState({
      workingBoard: newBoard
    }))
  }
  placeImageOnBoard = (imageId) => {
  let boardImage = this.state.images.find(image => imageId === image.id)
  let filteredImage = this.state.workingBoard.filter(image => imageId !== image.id)
  this.setState({
    workingBoard: [...this.state.workingBoard, boardImage]
  })
  if (this.state.workingBoard.includes(boardImage)) {
    this.setState({
      workingBoard: filteredImage
    })
  }
  }
  handleLeftDisplay = () => {
    this.setState(previousState => {
      return {
      startIdx: previousState.startIdx + 1,
      endIdx: previousState.endIdx + 1
      }
    })
  }
  handleRightDisplay = () => {
    this.setState(previousState => {
      return {
      startIdx: previousState.startIdx - 1,
      endIdx: previousState.endIdx - 1
      }
    })
  }

  addSaveBoard= (event) => {
    // console.log(this.state.workingBoard.id)
    fetch(`http://localhost:3000/boards/${this.state.workingBoard.id}`, {method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        title: event
      })
    })
    .then(response => response.json())
    .then(board=> console.log(board))
  }

  render() {
    return (
      <div className= 'parent'>

        <BoardContainer boards= {this.state.boards} images= {this.state.images} createBoard= {this.createBoard} showBoard= {this.showBoard}/>
        <WorkingBoard board= {this.state.workingBoard} images= {this.state.images} placeImageOnBoard= {this.placeImageOnBoard} showBoard= {this.showBoard} addSaveBoard= {this.addSaveBoard} />
        <Form newImage= {this.newImage}/>
        <PhotoContainer handleLeftDisplay= {this.handleLeftDisplay} handleRightDisplay= {this.handleRightDisplay} images= {this.state.images.slice(this.state.startIdx, this.state.endIdx)}  placeImageOnBoard= {this.placeImageOnBoard} showBoard= {this.showBoard}/>


      </div>
    );
  }

}

export default PhotoBoardContainer;
