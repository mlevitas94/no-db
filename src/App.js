import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Input from './Components/Input'
import Hero from './Components/Hero'


class App extends Component {
  constructor(){
    super()
    this.state = {

      heroes: []

    }
  }
  componentDidMount(){
    axios.get('/api/whatmyendpointisacalled')
  }
  render() {
    let shownHeroes = this.state.heroes.map((hero, i) => {
      if()
    })
    return (
      <div className="App">
        <h1>Overwatch Heroes</h1>

        <Input />

        <div className="Container">

          {shownHeroes}
          
        </div>
      </div>
    );
  }
}

export default App;
