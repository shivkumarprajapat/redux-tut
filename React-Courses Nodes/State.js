State

import React, { Component } from 'react'

export default class Profile extends Component {
    constructor() {
        super();
        this.state = {
            name: "Hello",
            count:0
        }
    }
    update() {
        this.setState({
            name: 'Ram',
            count: this.state.count+1
        })
    };
    render() {
        console.warn("render");
        return (
            <div>
                <h2>State {this.state.name}</h2> 
                <h2>Count {this.state.count}</h2> 
                //setState
                <button onClick={()=>{this.update()}}>Update</button>
            </div>
        )
    }
}
