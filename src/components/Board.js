import React, { Component } from 'react';

class Board extends Component {


  render() {
    // console.log(this.props.board)

    return (
      <div className= 'board-list' >

        <p onClick={()=>this.props.showBoard(this.props.board)}> {this.props.board.title} </p>
      </div>
    );
  }

}

export default Board;
