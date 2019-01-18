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
    boardImage: []
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
    console.log(v4());
    const newPic = {id: v4(), url: URL, keyWords: keyWords.split(',')}
    console.log(newPic);
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
      body: JSON.stringify()
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
  // removeImageFromBoard = (imageId) => {
  //
  //   this.setState({
  //     workingBoard: filteredImage
  //
  //   })
  // }
  render() {
    return (
      <div>
        <BoardContainer boards= {this.state.boards} createBoard= {this.createBoard} showBoard= {this.showBoard}/>
        <Form newImage= {this.newImage}/>
        <PhotoContainer images= {this.state.images}  placeImageOnBoard= {this.placeImageOnBoard}/>
        <WorkingBoard images= {this.state.workingBoard} placeImageOnBoard= {this.placeImageOnBoard} />

      </div>
    );
  }

}

export default PhotoBoardContainer;
