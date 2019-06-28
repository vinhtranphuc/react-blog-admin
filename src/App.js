import React, { Component } from 'react';
import './App.css';
import FrameComponent from './components/FrameComponent';

class App extends Component {
  render() {
    return (
      <div className="container">
        <FrameComponent>
        </FrameComponent>
      </div>
    );
  }
}
export default App;