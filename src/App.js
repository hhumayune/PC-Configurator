import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import "antd/dist/antd.css";


import BuilderPage from './pages/BuilderPage';
import MainPage from './pages/MainPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BuilderPage />
      </div>
    );
  }
}

export default App;
