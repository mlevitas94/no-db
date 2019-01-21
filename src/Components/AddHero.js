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
                <input onChange={(e) => this.updateHeroInput(e.target.value)}
                onKeyPress= {(e) => {
                    if(e.key === 'Enter'){
                        this.props.add(this.state.heroInput, this.state.roleInput)
                        this.setState({allowEdit:false})
                         }
                       }
                   }
                    placeholder="Hero Name..."/>
    
                <br/>
    
                <input onChange={(e) => this.updateRoleInput(e.target.value)}
                onKeyPress= {(e) => {
                    if(e.key === 'Enter'){
                        this.props.add(this.state.heroInput, this.state.roleInput)
                        this.setState({allowEdit:false})
                         }
                       }
                   }
                    placeholder="Hero Role..."/>
    
                <br/>
    
                <button onClick={() => this.props.add(this.state.heroInput, this.state.roleInput)}>Add Hero</button>
            </div>
        )
    }
}

export default AddHero