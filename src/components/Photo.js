import React, { Component } from 'react';

class Photo extends Component {

  render() {
    // console.log(this.props.image.id)
    return (
      <div className= "photos">

        <img onClick= {()=>this.props.placeImageOnBoard(this.props.image.id)} src={this.props.image.url} alt="clothing" height= '200px' width= 'auto'/>

      </div>
    );
  }

}

export default Photo;
