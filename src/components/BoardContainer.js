import React, { Component } from 'react';
import Board from './Board'
import v4 from 'uuid'

class BoardContainer extends Component {



  render() {
    // console.log(this.props.boards)
    return (
      <div className='board-container'>
        {this.props.boards.map(board => <Board key= {v4()} board= {board} showBoard= {this.props.showBoard} images= {this.props.workingBoard}/>)}
        <button className="btn btn-outline-dark" onClick= {this.props.createBoard}> Create New Board </button>
      </div>
    );
  }

}

export default BoardContainer;
