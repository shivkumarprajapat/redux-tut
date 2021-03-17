Class Component

import React from "react";

export default class EventHandling extends React.Component{
    text = () => {
        alert("ersff")
    }
    render() {
        return(
            <div>
                <h2>Event Handling</h2>
              	// 1.
                { <button onClick={ ()=>{this.text()}}>Click Me</button> }
                // 2.

                <button onClick={this.text.bind()}>Click Me</button>
            </div >
        )
    }
}


Function Components


export default function EventHandling() {
	1.
    // const text = () => {
    //     alert("Hello Function Component Event Handling")
    // }

    2.

    function text () {
        alert("Hello Function Component Event Handling")
    }
        return(
            <div>
                <h2>Event Handling</h2>
                <button onClick={text}>Click Me</button>
            </div >
        )
}
