import React, { Component } from 'react';
import './App.css';

import Content from './components/Content/Content'
import Login from "./components/Login";
import withAuthenticate from "./Authentication/withAuthenticate";


const ComponentFromWithAuthenticate = withAuthenticate(Content)(Login);

class App extends Component {


  render() {
    return (
      <div className="App">
       <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;
