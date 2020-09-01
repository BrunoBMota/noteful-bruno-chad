import React from 'react'
import { Link } from 'react-router-dom'


export default class Note extends React.Component{
  // state = {
  //   isOpen: false
  // }

  render(){
    // const handleClick = (event) => {
    //   this.setState({
    //     isOpen: !this.state.isOpen
    //   })
    // };

    return (
      <li>
        <Link to={`/folder/${this.props.note.folderId}/note/${this.props.note.id}`}>
          <h2>{this.props.note.name}</h2>
          <h3>{this.props.note.modified}</h3>
        </Link>
        {/* {this.state.isOpen ? <p>{this.props.note.content}</p> : ''} */}
        <button className="note-buttton-delete">DELETE</button>
      </li> 
    )
  }
}