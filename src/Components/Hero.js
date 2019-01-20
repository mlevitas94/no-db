import React, {Component} from 'react'


class Hero extends Component{
    constructor(){
        super()
        this.state ={
            allowEdit: false,
            editedName: "",
            editedRole: ""
        }
    }

    diplayEditInfo(){
        this.setState({
            allowEdit:true
        })
    }

    nameInput(val){
        this.setState({
            editedName: val
        })
    }

    roleInput(val){
        this.setState({
            editedRole:val
        })
    }


    render(){
        const id = this.props.id;

        return(
            <div className="HeroBox">
                <h2>{this.props.name} </h2>
                {/*img of the hero*/}
                <p>{this.props.role}</p>

                <button onClick={() => this.diplayEditInfo()}>Edit info</button>

                <div style ={{display: this.state.allowEdit ? 'block' : 'none' }}>
                    <input onChange={(e) => this.nameInput(e.target.value)} placeholder="Name..."/>
                    <br/>
                    <input onChange={(e) => this.roleInput(e.target.value)} placeholder = "Role..."/>
                    <br/>
                    <button onClick={() => this.props.edit(id, this.state.editedName, this.state.editedRole)}>Make changes</button>
                </div>


            </div>
        )
    }    
}

export default Hero