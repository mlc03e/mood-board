import React, { Component } from 'react';

class Board extends Component {


  render() {
    // console.log(this.props.board)

    return (
      <div className= 'board-list' >

        <h3 onClick={()=>this.props.showBoard(this.props.board)}> {this.props.board.title} </h3>
      </div>
    );
  }

}

export default Board;
