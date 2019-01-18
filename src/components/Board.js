import React, { Component } from 'react';

class Board extends Component {


  render() {
    // console.log(this.props.board)

    return (
      <div >

        <li onClick={()=>this.props.showBoard(this.props.board.title)}> {this.props.board.title} </li>
      </div>
    );
  }

}

export default Board;
