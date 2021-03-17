import React, { Component } from 'react'

export default class ToggleBtn extends Component {
    constructor() {
        super()
        this.state = {
            show:true
        }
    }
    render() {
        return (
            <div>
                {
                this.state.show ?
                    <button>Hide and Show</button>
                    :null 
                }
              <button onClick={()=>{this.setState({show:!this.state.show})}}>Click Me</button>  
            </div>
        )
    }
}


