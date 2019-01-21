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
    this.editHero = this.editHero.bind(this)
    this.deleteHero = this.deleteHero.bind(this)
  }




  filterHeroes(val){
    this.setState({
      filteredInput: val
    })
  }





  addHeroInfo(heroName){
    let newHero = {
        "name": heroName,
    }
    axios.post('/api/heroes', newHero)
    .then(response => {
      this.setState({
        heroes: response.data
      })
    }) 
    
}




editHero(id, name){
  let editedInfo = {
    "id": id,
    "name": name
  }

  axios.put('/api/heroes', editedInfo)
  .then(response => {
    this.setState({
      heroes: response.data
    })
  })
}




deleteHero(id){
  
  console.log(id)

  axios.delete(`/api/heroes/:${id}`)
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
      if(hero["id"] < 25){
          return (
            <Hero
            key={i}
            name={hero["name"]}
            id={hero["id"]}
            edit={this.editHero}
            delete={this.deleteHero}
            imgSrc={require('./images/' + hero["id"] + '.png')}
            allHeroes = {this.state.heroes} 
            />
          )
        }else{
          return (
            <Hero
            key={i}
            name={hero["name"]}
            id={hero["id"]}
            edit={this.editHero}
            delete={this.deleteHero}
            allHeroes = {this.state.heroes} 
            />
          )
        }
      }
    )

    return (
      <div className="App">
        <h1>Overwatch Heroes</h1>

        <Input filter={this.filterHeroes}/>

        <div className="Container">

          {shownHeroes}

        </div>

        <AddHero add={this.addHeroInfo}/>
      
      </div>
    );
  }
}

export default App;
