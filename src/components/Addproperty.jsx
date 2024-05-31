import React, { useState } from 'react';

function Addproperty(){
    const [val, setVal] = useState({name: "Yash", isLoggedIn: true});
    return (
        <div>
            <button onClick={() => setVal({...val, gender: "male"})} className='btn'> Add property</button>
        </div>
    )
}

export default Addproperty;