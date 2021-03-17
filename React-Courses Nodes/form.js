import React, { useState } from 'react'

function CreateUser() {
    const [name, setname] = useState("");
    const [age, setage] = useState("");
    const [address, setaddress] = useState("");
    function makeUser() {
        let data={name,address,age}
        console.warn("called", data);
    }
    return (
        <div>
            <input type="text" name="name" onChange={(e)=>setname(e.target.value)} value={ name}/>
            <br /><br />
            <input type="text" name="age" onChange={(e)=>setage(e.target.value)} value={ age}/>
            <br /><br />
            <input type="text" name="address" onChange={(e)=>setaddress(e.target.value)} value={ address} />
            <br /><br />
            <button onClick={makeUser}>Create User</button>
        </div>
    )
}

export default CreateUser
