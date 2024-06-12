import React, { useState } from 'react';

function FHControledComponents(){
    const [val, setVal] = useState({name: "", email: ""})

    const handleSubmit = (event)=> {
        event.preventDefault();
        console.log(val);
    }
        return(
        <div className='m-5'>
            <form action="" onSubmit={handleSubmit}>
            <input onChange={(e)=> setVal({...val, name: e.target.value})} type="text" placeholder="Name"/>
            <input onChange={(e)=> setVal({...val, email: e.target.value})} type="email" placeholder="Email"/>
            <input type="submit" />
            </form> 
        </div>
    )
}

export default FHControledComponents;