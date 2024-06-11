import React, { useRef } from 'react';

function FHUseRef(){

    const name = useRef(null);
    const password = useRef(null);

    const handleSubmit = (details) =>{
        details.preventDefault();
        console.log(name.current.value, password.current.value);
    }
    return(
        <div className='m-5'>
            <form action="" onSubmit={handleSubmit}>
                <input ref={name} type="text" placeholder='name'/>
                <input ref={password} type="text" placeholder='password'/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default FHUseRef;