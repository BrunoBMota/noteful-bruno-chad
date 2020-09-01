import React from 'react';
import { Router } from 'react-router-dom'
import Note from './Note';

export default class Folder extends React.Component {
  render(){
    const notes = this.props.STORE.notes.map(note => {
      return (
        <Note key={note.id} note={note}/> 
      )
    });

    return (
      <div className="folder-container">
        <p>Folder.js</p>
        {notes}
      </div>
    )
  }
}