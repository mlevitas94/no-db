import React, { Component } from 'react';
import './App.css';
import axios from 'axios'


class App extends Component {
  componentDidMount(){
    axios.get('/api/whatmyendpointisacalled')
  }
  render() {
    return (
      <div className="App">
    
      </div>
    );
  }
}

export default App;
