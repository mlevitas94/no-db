import React, {Component} from 'react'

class AddHero extends Component{
    constructor(){
        super()
        this.state = {
            heroInput: ""
        }
    }

    updateHeroInput(val){
        this.setState({
            heroInput: val
        })
    }


    render(){
        return (
            <div>
                <input onChange={(e) => this.updateHeroInput(e.target.value)}
                onKeyPress= {(e) => {
                    if(e.key === 'Enter'){
                        this.props.add(this.state.heroInput)
                        this.setState({allowEdit:false})
                         }
                       }
                   }
                    placeholder="Hero Name..."/>
    
                
    
                <br/>
    
                <button onClick={() => this.props.add(this.state.heroInput)}>Add Hero</button>
            </div>
        )
    }
}

export default AddHero