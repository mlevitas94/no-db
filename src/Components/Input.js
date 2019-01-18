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
                <input onChange={(e) => this.updateUserInput(e.target.value)} placeholder="Enter Hero Name"/>
                
            </div>
        );
    }
}
export default Input