import React, {Component} from 'react'

class Input extends Component{
    constructor(){
        super()
        this.state = {
            userInput: ""
        }
    }

    updateUserInput(val){
        this.setState({
            userInput: val
        })
    }
    render(){
        return(
            <div>
                <input onChange={(e) => this.updateUserInput(e.target.value)}
                 onKeyPress= {(e) => {
                     if(e.key === 'Enter'){
                         this.props.filter(this.state.userInput)
                          }
                        }
                    }
                     placeholder="Enter hero name"/>
                <button onClick={() => this.props.filter(this.state.userInput)}>Filter Heroes</button>
            </div>
        );
    }
}
export default Input