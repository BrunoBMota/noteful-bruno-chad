import React from 'react';
import Note from './Note';
import { Route, Link } from 'react-router-dom'


export default class MainSection extends React.Component {
  render(){
    const folders = this.props.STORE.folders.map(folder => {
      return (
      <li key={folder.id} className="folder">
        <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
      </li>
      )
    });
  
    const notes = this.props.STORE.notes.map(note => {
      return (
        <Note key={note.id} note={note}/> 
      )
    });

    return (
    <div className="main-section-route">
      <header>
        <h1>Noteful</h1>
      </header>
      <main>
        <ul>
        {/* {notes} */}
        </ul>
      </main>
      <aside>
        <ul>
        {folders}
        </ul>
      </aside>
    </div>
    )
  }
}