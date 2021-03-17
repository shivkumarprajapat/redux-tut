// Make constructor and state
// Save some names  in state 
// Use Map function for make Listing of name


import React, { Component } from 'react'

export default class MapFunction extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                { name: 'shiv', phone: "121", email: 'shiv@gmail.com' },
                { name: 'shaym', phone: "021", email: 'shaym@gmail.com' },
                { name: 'ram', phone: "101", email: 'ram@gmail.com' }
            ]
        }
    }
    render() {
        return (
            <div>
                <h2>Listing With Map</h2>
                {
                    this.state.list.map((item) =>
                        <div>
                            <span>name: {item.name}</span>
                            <span>phone: {item.phone}</span>
                            <span>email: {item.email}</span>
                        </div>
                    )
                }
            </div>
        )
    }
}
