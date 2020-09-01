import React from 'react'


export default class Note extends React.Component{
  state = {
    isOpen: false
  }

  render(){
    const handleClick = (event) => {
      this.setState({
        isOpen: !this.state.isOpen
      })
    };

    return (
      <li onClick={handleClick}>
        <h2>{this.props.note.name}</h2>
        <h3>{this.props.note.modified}</h3>
        {this.state.isOpen ? <p>{this.props.note.content}</p> : ''}
        <button className="note-buttton-delete">DELETE</button>
      </li> 
    )
  }
}