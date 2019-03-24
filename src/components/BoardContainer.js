import React, { Component } from 'react';
import Board from './Board'
import v4 from 'uuid'

class BoardContainer extends Component {
  state= {
    seeBoards: false
  }

handleViewBoards= () => {
  this.setState({
    seeBoards: true
  })
}

  render() {
    // console.log(this.props.boards)
    return (

        <div className='board-container'>
          <button className="btn btn-outline-dark" onClick= {this.props.createBoard}> Create New Board </button> <br></br>
          <button className="btn btn-outline-dark" onClick={this.handleViewBoards}>My Boards</button>
          {this.state.seeBoards && this.props.boards.map(board => <Board key= {v4()} board= {board} showBoard= {this.props.showBoard} />)}
        </div>

    );
  }

}

export default BoardContainer;
