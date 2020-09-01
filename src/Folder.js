import React from 'react';
import { Router } from 'react-router-dom'
import Note from './Note';
import FoldersNav from './FoldersNav';
// import NotesNav from './NotesNav';

export default class Folder extends React.Component {
  render(){
    let newNotes = this.props.STORE.notes.filter(note => note.folderId === this.props.match.params.folderId);
    const notes = newNotes.map(note => {
      return (
        <Note key={note.id} note={note}/> 
      )
    });

    return (
      <div className="folder-container">
        <FoldersNav STORE={this.props.STORE}/>
        <ul>
          {notes}
        </ul>
      </div>
    )
  }
}