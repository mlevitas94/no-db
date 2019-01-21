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
                <br/>

                <img src = {this.props.imgSrc}/>

                <p>{this.props.role}</p>

                <div style={{display:this.state.allowEdit ? 'none' : 'inline-block'}}>
                    <button onClick={() =>{ 
                        this.diplayEditInfo()
                        this.setState({deleteConfirm:false})
                        }}>Edit info</button>
                    
                    <br/>

                    <button onClick={() => this.setState({deleteConfirm: true})}
                    style={{display: this.state.deleteConfirm ? 'none' : 'inline-block' }}>Delete Hero</button>

                </div>    

                <div style={{display: this.state.deleteConfirm ? 'block' : 'none'}}>
                    <p>Are you sure?</p>
                    <button onClick={() => {
                        this.props.delete(id, name, role)
                        this.setState({deleteConfirm:false})}}>Yes</button>
                    <button onClick={() => this.setState({deleteConfirm:false})}>No</button>
                </div>


                <div style ={{display: this.state.allowEdit ? 'block' : 'none' }}>
                    <input className="HeroInput"
                    onChange={(e) => this.nameInput(e.target.value)}
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

                    <input className="HeroInput"
                    onChange={(e) => this.roleInput(e.target.value)}
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