import React, { Component } from 'react';
import logo from './logo.svg';
import apple from './Images/apple.png'
import './App.css';
import { Button } from 'react-bootstrap';
import AlbumList from  './Components/AlbumList';
//import Header from  './Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={apple} className="logo-apple" alt="logo" />
          <h1> Itunes list</h1>
        </header>
        <AlbumList />
      </div>
    );
  }
}

export default App;
