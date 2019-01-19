import React, {Component} from 'react'

class AddHero extends Component{
    constructor(){
        super()
        this.state = {
            heroInput: "",
            roleInput: ""
        }
    }

    updateHeroInput(val){
        this.setState({
            heroInput: val
        })
    }

    updateRoleInput(val){
        this.setState({
            roleInput: val
        })
    }

    render(){
        return (
            <div>
                <input onChange={(e) => this.updateHeroInput(e.target.value)} placeholder="Hero Name..."/>
    
                <br/>
    
                <input onChange={(e) => this.updateRoleInput(e.target.value)} placeholder="Hero role..."/>
    
                <br/>
    
                <button onClick={() => this.props.add(this.state.heroInput, this.state.roleInput)}>Add Hero</button>
            </div>
        )
    }
}

export default AddHero