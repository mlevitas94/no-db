import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Input from './Components/Input'
import Hero from './Components/Hero'
import AddHero from './Components/AddHero'


class App extends Component {
  constructor(){
    super()
    this.state = {

      heroes: [],
      filteredInput:""

    }

    this.filterHeroes = this.filterHeroes.bind(this)
    this.addHeroInfo = this.addHeroInfo.bind(this)
  }

  filterHeroes(val){
    this.setState({
      filteredInput: val
    })
  }

  addHeroInfo(heroName, role){
    console.log("clicked")
    let newHero = {
        "name": heroName,
        "role": role
    }
    axios.post('/api/heroes', newHero)
    .then(response => {
      this.setState({
        heroes: response.data
      })
    }) 
    
}

  componentDidMount(){
    axios.get('/api/heroes')
    .then(response => {
      
      this.setState({
        heroes: response.data
      })
    })
  }
  render() {
    let shownHeroes = this.state.heroes.filter((hero, i) => {
      if(this.state.filteredInput === ""){
        return true
      }else if(hero["name"].toUpperCase().includes(this.state.filteredInput) || hero["name"].toLowerCase().includes(this.state.filteredInput) ){
        return true
      }else{
        return false
      }
    }).map((hero, i) => {
      return (
          <Hero
          key={i}
          name={hero["name"]}
          role={hero["role"]}
          />
        )
      }
    )

    return (
      <div className="App">
        <h1>Overwatch Heroes</h1>

        <Input filter={this.filterHeroes}/>

        <div className="Container">

          {shownHeroes}

        </div>

        <AddHero add={this.addHeroInfo(heroName, role)}/>
      
      </div>
    );
  }
}

export default App;
