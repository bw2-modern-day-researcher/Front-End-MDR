import React, { Component } from 'react';
import './App.css';

import Content from './components/Content/Content'

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hello from the App</h1>
       <Content />
      </div>
    );
  }
}

export default App;
