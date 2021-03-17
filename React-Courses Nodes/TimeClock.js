import React, { useState } from 'react'

function TimeClock() {
    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval(UpdateTime, 1000);
    return (
        <div>
        <h1>Hello, world!</h1>
        <h2>{time}</h2>        
        </div>
    );
}

export default TimeClock
