import React from 'react';
import { Link } from 'react-router-dom'

export default class FoldersNav extends React.Component {
  render(){
    const folders = this.props.STORE.folders.map(folder => {
      return (
      <li key={folder.id} className="folder">
        <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
      </li>
      )
    });

    return (
      <aside>
        <ul>
          {folders}
        </ul>
      </aside>
    )
  }
}