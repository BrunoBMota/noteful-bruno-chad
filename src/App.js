import React from 'react';
import logo from './logo.svg';
import './App.css';
import STORE from './dummy-store';
import MainSection from './MainSection';
import Folder from './Folder';
import { Route } from 'react-router-dom'

class App extends React.Component {
  render(){
    return(
    <div className="App">
      <Route exact path='/' component={
        (props) => (<MainSection {...props} STORE={STORE}/> )
      }/>
      <Route path='/folder/:folderId' component={
        (props) => (<Folder {...props} STORE={STORE}/> )
      }/>
    </div>
    )
  }
}

export default App;
