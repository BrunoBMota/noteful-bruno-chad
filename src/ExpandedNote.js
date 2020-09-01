import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class ExpandedNote extends Component{
  goBack = () => {
    this.props.history.goBack();
  }
  render()
  {

    let note = this.props.STORE.notes.find(note => note.id === this.props.match.params.noteId);
    let folder = this.props.STORE.folders.find(folder => folder.id === this.props.match.params.folderId);
    console.log(note);
    return(
      <div className="expanded-note-container">
        <h2>{note.name}</h2>
        <h3>{note.modified}</h3>
        <p>{note.content}</p>
        <button className="note-buttton-delete">DELETE</button>
        <hr/>
        <h2>Current folder: {folder.name}</h2>
        <button onClick={this.goBack}>Go back!</button>
      </div>
    )
  }
}