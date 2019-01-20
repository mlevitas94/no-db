import React, {Component} from 'react'


class Hero extends Component{
    constructor(){
        super()
        this.state ={
            allowEdit: false,
            editedName: "",
            editedRole: "",
            deleteConfirm: false
            
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
        const name = this.props.name;
        const role = this.props.role;

        return(
            <div className="HeroBox">
                <h2>{this.props.name} </h2>
                {/*img of the hero*/}
                <p>{this.props.role}</p>

                <button style={{display:this.state.allowEdit ? 'none' : 'inline-block'}}
                onClick={() => this.diplayEditInfo()}>Edit info</button>
                
                <br/>

                <button onClick={() => this.props.delete(id, name, role)}
                style={{display: this.state.deleteConfirm ? 'none' : 'inline-block',
                display:this.state.allowEdit ? 'none': 'inline-block' }}>Delete Hero</button>

                <div style ={{display: this.state.allowEdit ? 'block' : 'none' }}>
                    <input onChange={(e) => this.nameInput(e.target.value)}
                     placeholder="Name..."
                     onKeyPress= {(e) => {
                        if(e.key === 'Enter'){
                            this.props.edit(id, this.state.editedName, this.state.editedRole)
                            this.setState({allowEdit:false})
                             }
                           }
                       }
                     />
                    <br/>

                    <input onChange={(e) => this.roleInput(e.target.value)}
                     placeholder = "Role..."
                     onKeyPress= {(e) => {
                        if(e.key === 'Enter'){
                            this.props.edit(id, this.state.editedName, this.state.editedRole)
                            this.setState({allowEdit:false})
                             }
                           }
                       }

                     />
                    <br/>

                    <button onClick={() => {
                        this.props.edit(id, this.state.editedName, this.state.editedRole)
                        this.setState({allowEdit:false})
                    }}
                    
                    >Make changes</button>

                    
                </div>


            </div>
        )
    }    
}

export default Hero