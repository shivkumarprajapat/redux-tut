import React, { Component } from 'react'

export default class Profile extends Component {
    constructor() {
        super();
        this.state = {
            name: "State",
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
                <h2>{this.state.name}</h2>
                <h2>Count {this.state.count}</h2>
                <button onClick={()=>{this.update()}}>Update</button>
            </div>
        )
    }
}
