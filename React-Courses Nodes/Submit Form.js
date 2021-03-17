import React, { Component } from 'react'

export default class Form extends Component {
    constructor(){
        super();
        this.state = {
            user : null,
            password: null
        }
    }

    submit(){
        console.warn(this.state);
    }
    render() {
        return (
            <div>
                <h2>Form Handling</h2>
                <input type="text" id="text" onChange={(e)=>{this.setState({user: e.target.value})}}/>
                <br></br>
                <input type="password" id="password" onChange={(e)=>{this.setState({password: e.target.value})}} />
                <br></br>
                <button onClick={()=>{this.submit()}}>Submit</button>
            </div>
        )
    }
}
