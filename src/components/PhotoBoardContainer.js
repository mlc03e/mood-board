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
    workingBoard: null,
    boardImage: [],
    startIdx: 0,
    endIdx: 8,
    clickedCreate: false,
    newImage: []
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

    const newPic = {id: v4(), images: URL, keyWords: keyWords.split(',')}

    fetch('http://localhost:3000/images', {method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newPic)
    })
    .then(response => response.json())
    .then(addedPic => this.setState({
      images: [...this.state.images, addedPic]
    }))
  }
  showBoard = (board) => {
    this.setState({
      workingBoard: board
    })
  }



  createBoard= () => {

    fetch('http://localhost:3000/boards', {method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        title: 'Add Title',
        images: []
      })
    })
    .then(response => response.json())
    .then(newBoard=> this.setState({
      workingBoard: newBoard,
      boards: [...this.state.boards, newBoard],
      clickedCreate: true
    }))
  }
  placeImageOnBoard = (imageId) => {
    console.log(imageId)
  // let boardImage = this.state.images.find(image => imageId === image)
  // let filteredImage = this.state.workingBoard.filter(image => imageId !== image.id)
  //debugger
  // let newImages = [...this.state.workingBoard.images, boardImage]
  //debugger
  this.setState({
    // workingBoard: {...this.state.workingBoard, images: boardImage}
    newImage: [...this.state.newImage, imageId]
  })
  // if (this.state.workingBoard.includes(boardImage)) {
  //   this.setState({
  //     workingBoard: filteredImage
  //   })
  // }
  }
  handleLeftDisplay = () => {
    this.setState(previousState => {
      return {
      startIdx: previousState.startIdx - 1,
      endIdx: previousState.endIdx - 1
      }
    })
  }
  handleRightDisplay = () => {
    this.setState(previousState => {
      return {
      startIdx: previousState.startIdx + 1,
      endIdx: previousState.endIdx + 1
      }
    })
  }

  addSaveBoard= (event) => {
    console.log(this.state.newImage)
    fetch(`http://localhost:3000/boards/${this.state.workingBoard.id}`, {method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        title: event,
        images: this.state.newImage
      })
    })
    .then(response => response.json())
    .then(board=> this.setState({
      workingBoard: board,
      boards: [...this.state.boards, board],
      // images: this.state.images
    }))
  }

  render() {
    return (
      <>
      <div className= 'parent'>
        <BoardContainer boards= {this.state.boards} images= {this.state.images} createBoard= {this.createBoard} showBoard= {this.showBoard}/>
        <WorkingBoard newImage= {this.state.newImage} clickedCreate={this.state.clickedCreate} workingBoard= {this.state.workingBoard} placeImageOnBoard= {this.placeImageOnBoard} showBoard= {this.showBoard} addSaveBoard= {this.addSaveBoard} boards= {this.state.boards} images={this.state.images}/>
        <Form newImage= {this.newImage}/>
      </div>
        <PhotoContainer handleLeftDisplay= {this.handleLeftDisplay} handleRightDisplay= {this.handleRightDisplay} images= {this.state.images.slice(this.state.startIdx, this.state.endIdx)}  placeImageOnBoard= {this.placeImageOnBoard} showBoard= {this.showBoard}/>
    </>
    );
  }

}

export default PhotoBoardContainer;
