import React, { Component } from 'react';

class Form extends Component {
  state= {
    imageURL: '',
    keyWords: ''
  }
  handleNewImg= (event) => {
    this.setState({
      imageURL: event.target.value
    })
  }
  handleKeyWords= (event) => {
    this.setState({
      keyWords: event.target.value
    })
  }
  handleSubmit= (event) => {
    event.preventDefault()
    this.props.newImage(this.state.imageURL, this.state.keyWords)
    this.setState({
      imageURL: '',
      keyWords: ''
    })
  }

  render() {
    return (
      <form className= 'form' onSubmit= {this.handleSubmit}>
        <p> Image URL </p>
        <input className="btn btn-outline-dark" type="text" onChange= {this.handleNewImg} value= {this.state.imageURL}/>
        <p> Key Words </p>
        <input className="btn btn-outline-dark" type="text" onChange= {this.handleKeyWords} value= {this.state.keyWords}/>
        <input className="btn btn-outline-dark" type="submit"/>
      </form>
    );
  }

}

export default Form;
